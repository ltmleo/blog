import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

// Pequeno "texto da internet" usado para treinar o modelo n-gram
const CORPUS = `
o gato subiu no telhado.
o gato dormiu no sofá.
o gato comeu o peixe.
o cachorro dormiu no tapete.
o cachorro correu no parque.
o cachorro latiu para o gato.
o menino correu para casa.
o menino comeu o bolo.
a menina leu um livro.
a menina escreveu um poema.
eu gosto de café com leite.
eu gosto de ler um livro no sofá.
eu gosto de programar.
eu tomo café pela manhã.
o café está quente.
o banco da praça está molhado.
sentei no banco da praça.
o banco emprestou dinheiro para a empresa.
fui ao banco sacar dinheiro.
o banco cobrou juros altos.
a empresa contratou um programador.
o programador escreveu um código.
o programador tomou café.
o código tem um erro.
o agente leu o código.
o agente encontrou um erro no código.
o agente corrigiu o erro.
o agente executou os testes.
os testes passaram.
a inteligência artificial escreveu um poema.
a inteligência artificial leu um livro inteiro.
a inteligência artificial previu a próxima palavra.
o modelo previu a próxima palavra.
o modelo leu muito texto da internet.
o modelo aprendeu padrões com muito texto.
a próxima palavra é a mais provável.
choveu muito no parque.
o sol está quente.
`;

const START = '<s>';
const END = '.';
const MAX_CONTEXT = 3;
const TOP_K = 6;

const PROMPTS = ['o', 'o banco', 'eu gosto de', 'a inteligência artificial', 'o agente'];

type Counts = Map<string, Map<string, number>>;

interface Token {
  word: string;
  prob: number | null; // null = veio do prompt, não foi escolhido pelo modelo
}

interface Candidate {
  word: string;
  prob: number;
}

const tokenize = (text: string): string[] => text.toLowerCase().match(/[\p{L}\p{N}]+|[.,!?]/gu) ?? [];

// Conta, para cada contexto de 1 a MAX_CONTEXT palavras, quais palavras vieram em seguida
const train = (corpus: string): Counts => {
  const counts: Counts = new Map();
  corpus
    .split('\n')
    .map(tokenize)
    .filter((sentence) => sentence.length > 0)
    .forEach((sentence) => {
      const padded = [...Array(MAX_CONTEXT).fill(START), ...sentence];
      for (let i = MAX_CONTEXT; i < padded.length; i++) {
        for (let k = 1; k <= MAX_CONTEXT; k++) {
          const key = padded.slice(i - k, i).join(' ');
          const next = counts.get(key) ?? new Map<string, number>();
          next.set(padded[i], (next.get(padded[i]) ?? 0) + 1);
          counts.set(key, next);
        }
      }
    });
  return counts;
};

// O modelo só enxerga a frase atual (depois do último ponto final)
const currentSentence = (tokens: Token[]): string[] => {
  const words = tokens.map((t) => t.word);
  const lastEnd = words.lastIndexOf(END);
  return words.slice(lastEnd + 1);
};

// Tenta o maior contexto possível; se nunca viu aquela sequência, "esquece" uma palavra e tenta de novo
const predict = (counts: Counts, sentence: string[], contextSize: number) => {
  const padded = [...Array(MAX_CONTEXT).fill(START), ...sentence];
  for (let k = contextSize; k >= 1; k--) {
    const context = padded.slice(-k);
    const next = counts.get(context.join(' '));
    if (next) {
      const total = [...next.values()].reduce((a, b) => a + b, 0);
      const candidates: Candidate[] = [...next.entries()]
        .map(([word, count]) => ({ word, prob: count / total }))
        .sort((a, b) => b.prob - a.prob);
      return { context, candidates, backedOff: k < contextSize };
    }
  }
  return { context: [] as string[], candidates: [] as Candidate[], backedOff: true };
};

const sample = (candidates: Candidate[]): Candidate => {
  let r = Math.random();
  for (const c of candidates) {
    r -= c.prob;
    if (r <= 0) return c;
  }
  return candidates[candidates.length - 1];
};

const fromPrompt = (prompt: string): Token[] => tokenize(prompt).map((word) => ({ word, prob: null }));

const formatPercent = (p: number): string => {
  if (p >= 0.1) return `${Math.round(p * 100)}%`;
  if (p >= 0.001) return `${(p * 100).toFixed(1)}%`;
  return `${(p * 100).toExponential(1)}%`;
};

const NextTokenGame: React.FC = () => {
  const counts = useMemo(() => train(CORPUS), []);
  const [tokens, setTokens] = useState<Token[]>(fromPrompt(PROMPTS[0]));
  const [contextSize, setContextSize] = useState<number>(1);

  const sentence = currentSentence(tokens);
  const { context, candidates, backedOff } = predict(counts, sentence, contextSize);
  const ended = tokens.length > 0 && tokens[tokens.length - 1].word === END;

  const chosen = tokens.filter((t) => t.prob !== null);
  const sentenceProb = chosen.reduce((acc, t) => acc * (t.prob as number), 1);

  const append = (c: Candidate) => setTokens((prev) => [...prev, { word: c.word, prob: c.prob }]);

  const sampleNext = () => {
    if (candidates.length > 0) append(sample(candidates));
  };

  const generateSentence = () => {
    setTokens((prev) => {
      let result = [...prev];
      for (let i = 0; i < 30; i++) {
        const { candidates: next } = predict(counts, currentSentence(result), contextSize);
        if (next.length === 0) break;
        const c = sample(next);
        result = [...result, { word: c.word, prob: c.prob }];
        if (c.word === END) break;
      }
      return result;
    });
  };

  const undo = () => setTokens((prev) => prev.slice(0, -1));

  const visibleStart = tokens.length - context.filter((w) => w !== START).length;

  return (
    <div className={styles.game}>
      <div className={styles.header}>
        <strong>Jogo do próximo token</strong>
        <span className={styles.subtitle}>
          Você é o autocomplete: escolha a próxima palavra ou deixe o modelo sortear.
        </span>
      </div>

      <div className={styles.controls}>
        <span>Começar com:</span>
        {PROMPTS.map((p) => (
          <button key={p} className={styles.chip} onClick={() => setTokens(fromPrompt(p))}>
            {p}
          </button>
        ))}
      </div>

      <div className={styles.controls}>
        <span>Memória do modelo:</span>
        {[1, 2, 3].map((k) => (
          <button
            key={k}
            className={`${styles.chip} ${contextSize === k ? styles.chipActive : ''}`}
            onClick={() => setContextSize(k)}
          >
            {k} {k === 1 ? 'palavra' : 'palavras'}
          </button>
        ))}
      </div>

      <div className={styles.text} aria-live="polite">
        {tokens.map((t, i) => (
          <span
            key={i}
            className={`${styles.token} ${i >= visibleStart && !ended ? styles.inContext : ''} ${
              t.prob === null ? styles.fromPrompt : ''
            }`}
            title={t.prob === null ? 'Palavra inicial' : `Probabilidade: ${formatPercent(t.prob)}`}
          >
            {t.word}
          </span>
        ))}
        {!ended && <span className={styles.cursor}>▍</span>}
      </div>

      <div className={styles.seeing}>
        {ended ? (
          <>Frase completa! Escolha uma palavra para começar outra frase ou um novo começo lá em cima.</>
        ) : (
          <>
            O modelo enxerga só:{' '}
            {context.map((w, i) => (
              <code key={i}>{w === START ? '⟨início⟩' : w}</code>
            ))}
            {backedOff && (
              <em className={styles.warning}>
                {' '}
                (nunca viu essa sequência no treino, então "esqueceu" palavras até achar algo conhecido)
              </em>
            )}
          </>
        )}
      </div>

      <ul className={styles.candidates}>
        {candidates.slice(0, TOP_K).map((c) => (
          <li key={c.word}>
            <button className={styles.candidate} onClick={() => append(c)}>
              <span className={styles.bar} style={{ width: `${c.prob * 100}%` }} />
              <span className={styles.word}>{c.word === END ? '. (fim)' : c.word}</span>
              <span className={styles.prob}>{formatPercent(c.prob)}</span>
            </button>
          </li>
        ))}
        {candidates.length > TOP_K && (
          <li className={styles.more}>+ {candidates.length - TOP_K} palavras menos prováveis</li>
        )}
      </ul>

      <div className={styles.actions}>
        <button className="button button--primary button--sm" onClick={sampleNext}>
          🎲 Sortear próxima
        </button>
        <button className="button button--secondary button--sm" onClick={generateSentence}>
          Completar frase
        </button>
        <button className="button button--secondary button--sm" onClick={undo} disabled={tokens.length === 0}>
          Desfazer
        </button>
      </div>

      <div className={styles.footer}>
        {chosen.length > 0 ? (
          <>
            Probabilidade da sequência gerada: <strong>{formatPercent(sentenceProb)}</strong>{' '}
            ({chosen.length} {chosen.length === 1 ? 'escolha' : 'escolhas'})
          </>
        ) : (
          <>Treinado com {CORPUS.trim().split('\n').length} frases curtas.</>
        )}
      </div>
    </div>
  );
};

export default NextTokenGame;
