import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Stage = 'ambiente' | 'sensores' | 'decisao' | 'atuadores';

interface Step {
  stage: Stage;
  environment: string; // estado do ambiente mostrado na caixa
  caption: string;
}

interface Scenario {
  name: string;
  sensors: string;
  actuators: string;
  steps: Step[];
}

const SCENARIOS: Scenario[] = [
  {
    name: '🌡️ Termostato',
    sensors: 'Termômetro',
    actuators: 'Relé do aquecedor',
    steps: [
      { stage: 'ambiente', environment: 'Sala a 17 °C', caption: 'A sala está fria: 17 °C.' },
      { stage: 'sensores', environment: 'Sala a 17 °C', caption: 'O termômetro mede a temperatura. Esse dado é o percepto.' },
      { stage: 'decisao', environment: 'Sala a 17 °C', caption: 'Regra fixa: abaixo de 20 °C, ligar o aquecedor.' },
      { stage: 'atuadores', environment: 'Sala a 17 °C', caption: 'O relé liga o aquecedor. Essa é a ação.' },
      { stage: 'ambiente', environment: 'Sala a 21 °C', caption: 'A sala esquenta, e o ciclo recomeça.' },
    ],
  },
  {
    name: '🤖 Robô aspirador',
    sensors: 'Câmera e sensor de sujeira',
    actuators: 'Rodas e escovas',
    steps: [
      { stage: 'ambiente', environment: 'Sujeira no tapete', caption: 'Há sujeira no tapete da sala.' },
      { stage: 'sensores', environment: 'Sujeira no tapete', caption: 'A câmera e o sensor de sujeira detectam onde ela está.' },
      { stage: 'decisao', environment: 'Sujeira no tapete', caption: 'Calcula o caminho até a sujeira, desviando do sofá.' },
      { stage: 'atuadores', environment: 'Sujeira no tapete', caption: 'As rodas levam o robô até lá e as escovas aspiram.' },
      { stage: 'ambiente', environment: 'Tapete limpo', caption: 'O tapete fica limpo, e o robô procura a próxima sujeira.' },
    ],
  },
  {
    name: '💻 Agente de IA',
    sensors: 'Teclado, arquivos e terminal',
    actuators: 'Comandos e edição de arquivos',
    steps: [
      { stage: 'ambiente', environment: 'Projeto com teste falhando', caption: 'Você pede: "corrija o teste que está falhando".' },
      { stage: 'sensores', environment: 'Projeto com teste falhando', caption: 'Lê sua mensagem, os arquivos do projeto e a saída do terminal.' },
      { stage: 'decisao', environment: 'Projeto com teste falhando', caption: 'O modelo decide: editar o código e rodar os testes de novo.' },
      { stage: 'atuadores', environment: 'Projeto com teste falhando', caption: 'Edita o arquivo e executa os testes no computador.' },
      { stage: 'ambiente', environment: 'Testes passando', caption: 'O projeto mudou. Ele lê o resultado e decide se já terminou.' },
    ],
  },
];

// Posição da "bolinha" que percorre o ciclo, em coordenadas do SVG
const POSITIONS: Record<Stage, { x: number; y: number }> = {
  ambiente: { x: 130, y: 140 },
  sensores: { x: 385, y: 60 },
  decisao: { x: 385, y: 140 },
  atuadores: { x: 385, y: 220 },
};

const STEP_MS = 2200;

const AgentLoop: React.FC = () => {
  const [scenarioIndex, setScenarioIndex] = useState<number>(0);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(true);

  const scenario = SCENARIOS[scenarioIndex];
  const step = scenario.steps[stepIndex];
  const dot = POSITIONS[step.stage];

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

  const boxClass = (stage: Stage) => `${styles.box} ${step.stage === stage ? styles.active : ''}`;

  return (
    <div className={styles.loop}>
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

      <svg viewBox="0 0 600 280" className={styles.diagram} role="img" aria-label="Ciclo de um agente: ambiente, sensores, decisão e atuadores">
        <defs>
          <marker id="agent-loop-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
          </marker>
        </defs>

        {/* Ambiente */}
        <rect x="20" y="40" width="220" height="200" rx="12" className={boxClass('ambiente')} />
        <text x="130" y="70" className={styles.title}>Ambiente</text>
        <text x="130" y="215" className={styles.state}>{step.environment}</text>

        {/* Agente */}
        <rect x="350" y="10" width="240" height="260" rx="12" className={styles.agent} />
        <text x="580" y="262" className={styles.agentLabel}>Agente</text>

        <rect x="370" y="35" width="200" height="50" rx="8" className={boxClass('sensores')} />
        <text x="470" y="56" className={styles.title}>Sensores</text>
        <text x="470" y="74" className={styles.detail}>{scenario.sensors}</text>

        <rect x="370" y="115" width="200" height="50" rx="8" className={boxClass('decisao')} />
        <text x="470" y="136" className={styles.title}>Decisão</text>
        <text x="470" y="154" className={styles.detail}>processa e escolhe a ação</text>

        <rect x="370" y="195" width="200" height="50" rx="8" className={boxClass('atuadores')} />
        <text x="470" y="216" className={styles.title}>Atuadores</text>
        <text x="470" y="234" className={styles.detail}>{scenario.actuators}</text>

        {/* Setas */}
        <path d="M 240 80 C 300 80, 310 60, 368 60" className={styles.arrow} markerEnd="url(#agent-loop-arrow)" />
        <text x="300" y="58" className={styles.arrowLabel}>perceptos</text>
        <path d="M 470 85 L 470 113" className={styles.arrow} markerEnd="url(#agent-loop-arrow)" />
        <path d="M 470 165 L 470 193" className={styles.arrow} markerEnd="url(#agent-loop-arrow)" />
        <path d="M 368 220 C 310 220, 300 200, 242 200" className={styles.arrow} markerEnd="url(#agent-loop-arrow)" />
        <text x="300" y="232" className={styles.arrowLabel}>ações</text>

        {/* Bolinha que percorre o ciclo */}
        <g className={styles.dot} style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }}>
          <circle r="7" />
        </g>
      </svg>

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

export default AgentLoop;
