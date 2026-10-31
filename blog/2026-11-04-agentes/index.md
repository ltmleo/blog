# Agentes de IA

Conversando com meu irmão (que usa IA diariamente, mas não no contexto de engenharia de software) sobre Agentes de IA, percebi o quão complexo esse assunto pode ser, mas também que o entendimento pode ser muito facilitado para quem acompanhou desde o início a evolução dessa tecnologia. Pensando nisso, resolvi fazer um post explicando para leigos como um agente de IA funciona e como chegamos até aqui.

<!-- truncate -->

## O que é um agente de IA?

Existem muitas maneiras de se definir um agente de IA. A definição formal é a de um sistema formado por `Sensores` e `Atuadores`, onde os sensores coletam dados do ambiente (perceptos), como câmeras, áudio e texto; o sistema processa esses dados, calcula a ação a ser tomada e altera o ambiente através dos atuadores, como um braço robótico ou comandos executados no computador [1].

{/* TODO: inserir animação aqui */}

> Mas então qualquer programa que consiga ler e escrever em um meio é um agente? Um termostato é considerado um agente?

Sim, é um agente, mas não um agente inteligente. Para distinguir softwares tradicionais de um software inteligente, a distinção comportamental foi criada. Essa definição estipula que, para ser considerado um agente de IA, o software precisa ter: **Autonomia**, onde o sistema opera sem a intervenção direta e constante de humanos; **Reatividade**, onde o sistema percebe e atua em seu ambiente de forma contínua; **Pró-atividade**, onde o sistema não apenas reage a estímulos, mas é capaz de exibir comportamento direcionado a objetivos; e **Habilidade Social**, onde o sistema é capaz de interagir e negociar com outros agentes ou humanos para resolver problemas [2].

:::note
Mesmo com essa definição, ainda fica muito abrangente o que pode ser um agente. Pretendo falar mais sobre isso em um post futuro (mais técnico); o Shawn Wallace fez isso brilhantemente em seu [blog](https://www.shawnewallace.com/2026-08-12-lets-talk-about-agents/).
:::

> Entendi o que é um agente, e realmente o Claude entende meu **objetivo**, lê e edita um monte de arquivos de forma **autônoma**, **reage** aos erros da atividade que estou fazendo e parece se comportar como um **colega de trabalho**. Mas como ele funciona?

Os agentes mais populares hoje funcionam com uma tecnologia chamada LLM (Large Language Models). Vamos entender cada parte desse nome nas próximas seções. As LLMs, como o próprio nome diz, são modelos e não conseguem atuar nem perceber o ambiente sozinhas; elas precisam de um *harness* para guiar esse comportamento.

:::tip
Se o modelo de IA (LLM) for comparado ao motor potente de um carro ou a um cavalo, o harness é o restante do veículo (direção, rodas, freios) ou o arreio/sela que permite controlar, direcionar e transformar essa potência em uma utilidade prática e segura.
:::

Então podemos definir um agente como [4]:

```
Agente = Modelo + Harness
```

## LLMs


## Referências

1. Russell, S. J., & Norvig, P. (2010). Inteligência Artificial: Uma Abordagem Moderna (3ª ed.). Elsevier. (Capítulo 2: Agentes Inteligentes).
2. Wooldridge, M., & Jennings, N. R. (1995). Intelligent agents: Theory and practice. The Knowledge Engineering Review, 10(2), 115-152.
3. https://www.shawnewallace.com/2026-08-12-lets-talk-about-agents/
4. https://www.langchain.com/blog/the-anatomy-of-an-agent-harness