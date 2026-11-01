import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Actor = 'usuario' | 'harness' | 'modelo' | 'ferramenta';

interface Step {
  from: Actor;
  to: Actor;
  label: string; // texto curto que viaja junto com a mensagem
  message: string; // conteúdo da mensagem mostrado no painel
  caption: string;
}

interface Scenario {
  name: string;
  tool: string;
  steps: Step[];
}

const WEATHER_PROMPT = `[sistema]     Você é um assistente útil.
              Ferramentas disponíveis:
              previsao_do_tempo(cidade): consulta o tempo atual de uma cidade
[usuário]     Como está o tempo em Campinas agora?`;

const MATH_PROMPT = `[sistema]     Você é um assistente útil.
              Ferramentas disponíveis:
              calculadora(expressao): calcula uma expressão matemática
[usuário]     Quanto é 48.271 × 3.659?`;

const CODE_PROMPT = `[sistema]     Você é um assistente de programação.
              Ferramentas disponíveis:
              rodar_testes(): executa os testes do projeto
              editar_arquivo(caminho, de, para): substitui um trecho de código
[usuário]     O teste de soma está falhando. Corrija.`;

const CODE_ERROR = 'FALHOU test_soma: soma(2, 2) retornou 0, esperado 4\n  soma.py, linha 2: return a - b';

const SCENARIOS: Scenario[] = [
  {
    name: '🌤️ Previsão do tempo',
    tool: 'API do tempo',
    steps: [
      {
        from: 'usuario', to: 'harness', label: 'pergunta',
        message: 'Como está o tempo em Campinas agora?',
        caption: 'Você manda a pergunta. Ela chega primeiro ao harness, e não direto ao modelo.',
      },
      {
        from: 'harness', to: 'modelo', label: 'prompt + ferramentas',
        message: WEATHER_PROMPT,
        caption: 'O harness monta o prompt: o system prompt, a lista de ferramentas (o que cada uma faz e quais dados exige) e a sua pergunta.',
      },
      {
        from: 'modelo', to: 'harness', label: 'chamada (JSON)',
        message: '{ "ferramenta": "previsao_do_tempo", "argumentos": { "cidade": "Campinas" } }',
        caption: 'O modelo não sabe como está o tempo hoje, mas reconhece que a ferramenta resolve. Em vez de responder, devolve um pedido estruturado em JSON.',
      },
      {
        from: 'harness', to: 'ferramenta', label: 'executa',
        message: 'previsao_do_tempo(cidade="Campinas")',
        caption: 'Quem executa a função é o harness: ele chama a API de previsão do tempo com os argumentos que o modelo escolheu.',
      },
      {
        from: 'ferramenta', to: 'harness', label: 'resultado',
        message: '{ "temperatura": 31, "condicao": "ensolarado", "umidade": 40 }',
        caption: 'A API devolve os dados atuais.',
      },
      {
        from: 'harness', to: 'modelo', label: 'resultado',
        message: '...conversa anterior...\n[ferramenta]  previsao_do_tempo → { "temperatura": 31, "condicao": "ensolarado", "umidade": 40 }',
        caption: 'O harness acrescenta o resultado à conversa e chama o modelo de novo. Como o modelo não tem memória, ele recebe a conversa inteira outra vez.',
      },
      {
        from: 'modelo', to: 'harness', label: 'resposta',
        message: 'Agora em Campinas está ensolarado, com 31 °C e umidade de 40%.',
        caption: 'Com os dados em mãos, o modelo escreve a resposta final, sem pedir mais nenhuma ferramenta.',
      },
      {
        from: 'harness', to: 'usuario', label: 'resposta',
        message: 'Agora em Campinas está ensolarado, com 31 °C e umidade de 40%.',
        caption: 'O harness mostra a resposta para você. Toda a troca com a ferramenta aconteceu nos bastidores.',
      },
    ],
  },
  {
    name: '🧮 Conta difícil',
    tool: 'Calculadora',
    steps: [
      {
        from: 'usuario', to: 'harness', label: 'pergunta',
        message: 'Quanto é 48.271 × 3.659?',
        caption: 'Você pede uma conta que o modelo, sozinho, provavelmente erraria.',
      },
      {
        from: 'harness', to: 'modelo', label: 'prompt + ferramentas',
        message: MATH_PROMPT,
        caption: 'O harness envia a pergunta junto com a ferramenta de calculadora.',
      },
      {
        from: 'modelo', to: 'harness', label: 'chamada (JSON)',
        message: '{ "ferramenta": "calculadora", "argumentos": { "expressao": "48271 * 3659" } }',
        caption: 'Em vez de "adivinhar" os dígitos token por token, o modelo pede para a calculadora fazer a conta.',
      },
      {
        from: 'harness', to: 'ferramenta', label: 'executa',
        message: 'calculadora(expressao="48271 * 3659")',
        caption: 'O harness executa a calculadora.',
      },
      {
        from: 'ferramenta', to: 'harness', label: 'resultado',
        message: '176623589',
        caption: 'A calculadora devolve o resultado exato.',
      },
      {
        from: 'harness', to: 'modelo', label: 'resultado',
        message: '...conversa anterior...\n[ferramenta]  calculadora → 176623589',
        caption: 'O resultado volta para o modelo, junto com o resto da conversa.',
      },
      {
        from: 'modelo', to: 'harness', label: 'resposta',
        message: '48.271 × 3.659 = 176.623.589',
        caption: 'O modelo só precisa formatar a resposta.',
      },
      {
        from: 'harness', to: 'usuario', label: 'resposta',
        message: '48.271 × 3.659 = 176.623.589',
        caption: 'E você recebe a conta certa.',
      },
    ],
  },
  {
    name: '🔁 Agente de código',
    tool: 'Arquivos e terminal',
    steps: [
      {
        from: 'usuario', to: 'harness', label: 'pedido',
        message: 'O teste de soma está falhando. Corrija.',
        caption: 'Agora um pedido que precisa de várias ferramentas, uma depois da outra.',
      },
      {
        from: 'harness', to: 'modelo', label: 'prompt + ferramentas',
        message: CODE_PROMPT,
        caption: 'O harness envia o pedido com duas ferramentas: rodar os testes e editar arquivos.',
      },
      {
        from: 'modelo', to: 'harness', label: 'chamada 1',
        message: '{ "ferramenta": "rodar_testes", "argumentos": {} }',
        caption: 'Rodada 1: antes de mexer em qualquer coisa, o modelo quer ver o erro.',
      },
      {
        from: 'harness', to: 'ferramenta', label: 'executa',
        message: 'rodar_testes()',
        caption: 'O harness roda os testes no terminal.',
      },
      {
        from: 'ferramenta', to: 'harness', label: 'resultado',
        message: CODE_ERROR,
        caption: 'O teste falha e mostra onde está o problema.',
      },
      {
        from: 'harness', to: 'modelo', label: 'resultado',
        message: `...conversa anterior...\n[ferramenta]  rodar_testes → ${CODE_ERROR}`,
        caption: 'O erro volta para o modelo, que decide o próximo passo.',
      },
      {
        from: 'modelo', to: 'harness', label: 'chamada 2',
        message: '{ "ferramenta": "editar_arquivo", "argumentos": { "caminho": "soma.py", "de": "a - b", "para": "a + b" } }',
        caption: 'Rodada 2: o modelo viu o sinal de menos no lugar do mais e pede para corrigir o arquivo.',
      },
      {
        from: 'harness', to: 'ferramenta', label: 'executa',
        message: 'editar_arquivo(caminho="soma.py", de="a - b", para="a + b")',
        caption: 'O harness edita o arquivo no seu computador.',
      },
      {
        from: 'ferramenta', to: 'harness', label: 'resultado',
        message: 'OK: soma.py alterado',
        caption: 'A edição deu certo.',
      },
      {
        from: 'harness', to: 'modelo', label: 'resultado',
        message: '...conversa anterior...\n[ferramenta]  editar_arquivo → OK: soma.py alterado',
        caption: 'O modelo recebe a confirmação. Mas será que o teste passa agora?',
      },
      {
        from: 'modelo', to: 'harness', label: 'chamada 3',
        message: '{ "ferramenta": "rodar_testes", "argumentos": {} }',
        caption: 'Rodada 3: em vez de dar o trabalho como pronto, o modelo confere o resultado.',
      },
      {
        from: 'harness', to: 'ferramenta', label: 'executa',
        message: 'rodar_testes()',
        caption: 'O harness roda os testes de novo.',
      },
      {
        from: 'ferramenta', to: 'harness', label: 'resultado',
        message: 'PASSOU test_soma',
        caption: 'Agora o teste passa.',
      },
      {
        from: 'harness', to: 'modelo', label: 'resultado',
        message: '...conversa anterior...\n[ferramenta]  rodar_testes → PASSOU test_soma',
        caption: 'O resultado volta para o modelo pela última vez.',
      },
      {
        from: 'modelo', to: 'harness', label: 'resposta',
        message: 'Corrigi a função soma em soma.py: ela subtraía em vez de somar. O teste agora passa.',
        caption: 'Objetivo alcançado: o modelo para de pedir ferramentas e responde.',
      },
      {
        from: 'harness', to: 'usuario', label: 'resposta',
        message: 'Corrigi a função soma em soma.py: ela subtraía em vez de somar. O teste agora passa.',
        caption: 'Esse ciclo de agir, observar o resultado e decidir o próximo passo é o comportamento agêntico.',
      },
    ],
  },
];

// Posição horizontal (centro) de cada participante, em coordenadas do SVG
const ACTORS: Record<Actor, { title: string; x: number }> = {
  usuario: { title: 'Você', x: 75 },
  harness: { title: 'Harness', x: 225 },
  modelo: { title: 'Modelo', x: 375 },
  ferramenta: { title: 'Ferramenta', x: 525 },
};

const TRACK_Y = 135;
const STEP_MS = 4000;

const ToolCalling: React.FC = () => {
  const [scenarioIndex, setScenarioIndex] = useState<number>(0);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(true);

  const scenario = SCENARIOS[scenarioIndex];
  const step = scenario.steps[stepIndex];
  const fromX = ACTORS[step.from].x;
  const toX = ACTORS[step.to].x;
  const direction = toX > fromX ? 1 : -1;

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setStepIndex((i) => (i + 1) % scenario.steps.length), STEP_MS);
    return () => clearInterval(timer);
  }, [playing, scenario]);

  const selectScenario = (index: number) => {
    setScenarioIndex(index);
    setStepIndex(0);
  };

  const next = () => setStepIndex((i) => (i + 1) % scenario.steps.length);

  const details: Record<Actor, string> = {
    usuario: 'faz o pedido',
    harness: 'orquestra e executa',
    modelo: 'decide o que fazer',
    ferramenta: scenario.tool,
  };

  const boxClass = (actor: Actor) =>
    `${styles.box} ${step.from === actor || step.to === actor ? styles.active : ''}`;

  return (
    <div className={styles.toolCalling}>
      <div className={styles.controls}>
        {SCENARIOS.map((s, i) => (
          <button
            key={s.name}
            className={`${styles.chip} ${scenarioIndex === i ? styles.chipActive : ''}`}
            onClick={() => selectScenario(i)}
          >
            {s.name}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 600 170" className={styles.diagram} role="img" aria-label="Troca de mensagens entre você, o harness, o modelo e a ferramenta">
        <defs>
          <marker id="tool-calling-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
          </marker>
        </defs>

        {(Object.keys(ACTORS) as Actor[]).map((id) => {
          const { title, x } = ACTORS[id];
          return (
            <g key={id}>
              <line x1={x} y1="80" x2={x} y2="160" className={styles.lifeline} />
              <rect x={x - 65} y="15" width="130" height="60" rx="10" className={boxClass(id)} />
              <text x={x} y="41" className={styles.title}>{title}</text>
              <text x={x} y="60" className={styles.detail}>{details[id]}</text>
            </g>
          );
        })}

        {/* Seta da mensagem atual */}
        <path
          d={`M ${fromX} ${TRACK_Y} L ${toX - direction * 4} ${TRACK_Y}`}
          className={styles.arrow}
          markerEnd="url(#tool-calling-arrow)"
        />

        {/* Mensagem que viaja de um lado para o outro */}
        <g
          key={`${scenarioIndex}-${stepIndex}`}
          className={styles.packet}
          style={{
            '--from': `${fromX}px`,
            '--to': `${toX}px`,
            transform: `translateX(${toX}px)`,
          } as React.CSSProperties}
        >
          <text x="0" y={TRACK_Y - 14} className={styles.packetLabel}>{step.label}</text>
          <circle cx="0" cy={TRACK_Y} r="7" />
        </g>
      </svg>

      <div className={styles.message}>
        <div className={styles.messageHeader}>
          {ACTORS[step.from].title} → {ACTORS[step.to].title}
        </div>
        <pre className={styles.messageBody}>{step.message}</pre>
      </div>

      <p className={styles.caption} aria-live="polite">
        <strong>{stepIndex + 1}/{scenario.steps.length}</strong> {step.caption}
      </p>

      <div className={styles.actions}>
        <button className="button button--secondary button--sm" onClick={() => setPlaying((p) => !p)}>
          {playing ? '⏸ Pausar' : '▶ Continuar'}
        </button>
        <button className="button button--secondary button--sm" onClick={next} disabled={playing}>
          Próximo passo
        </button>
      </div>
    </div>
  );
};

export default ToolCalling;
