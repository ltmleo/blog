# Agentes de IA

Convernsando com meu irmao (que usa IA diariamente, mas não no contexto de engenharia do software) sobre Agentes de IA. Percebi o que quao complexo esse assunto pode ser, mas tambem o entendimento pode ser muito facilitado por quem acompanhou desde do inicio a evolucao dessa tecnologia, pensando nisso, resolvei fazer um post explicando para leigos como um agente de IA funciona e como chegamos ate aqui.

## O que é um agente de IA?

Existem muitas maneiras de se definir um agente de IA. A definicao formal é um sistema formado por ´Sensores´ e ´Atuadores´. Onde os sensores coletam dados do ambiente (perceptos), como cameras, audio, texto, processam esses dados, calculam a açao a ser tomada, e alteram o ambiente atraves doas atuadores, um braço robotico, ou comandos executados no computador [1].

<iserir animacao aqui>

> Mas entao qualquer programa que consiga ler e escrever em um meio é um agente? Um termoestado é considerado um agente?

Sim e não, apenas por essa definição a reposta é sim, mas para distinguir softwares tradicionais de um software inteligente, a distinção comportamental foi criada. Essa definição estipula que para ser considerado um agente de IA, o software precisa ter: **Autonomia**, onde sistema opera sem a intervenção direta e constante de humano, **Reatividade**, onde o sistema percebe e atua em seu ambiente de forma contínua, **Pró-atividade**, o sistema não apenas reage a estímulos, mas é capaz de exibir comportamento direcionado a objetivos e **Habilidade Social** onde o sistema é capaz de interagir e negociar com outros agentes ou humanos para resolver problemas.

:::[note]
Mesmo com essa definição, ainda fica muito abrangente o que pode ser um agente, pretendo falar mais sobre isso em um post futuro (mais técnico), o Shawn Wallace fez isso brilhantemente em seu [blog](https://www.shawnewallace.com/2026-08-12-lets-talk-about-agents/).
:::

> Entendi o que é um agente, e realmente, o claude, entende meu **objetivo**, le e edita um monte de arquivos de forma **autonoma**, **reage** aos erros da atividade que estou fazendo e parece se comportar como um **colega de trabalho**, mas como ele funciona?

Os agentes de IAs atuais, funcionam com uma técnlogica chamada LLM (Language Large Models), vamos entender cada parte desse nome nas proximais seções. As LLMs, como proprio nome diz, são um modelo e não consegue atuar nem perceber o ambiente sozinhos, elas precisam de um ´harness´, para guiar esse comportamento.

:::tip
Se o modelo de IA (LLM) for comparado ao motor potente de um carro ou a um cavalo, o harness é o restante do veículo (direção, rodas, freios) ou o arreio/sela que permite controlar, direcionar e transformar essa potência em uma utilidade prática e segura
:::

Então podemos definir um agente como:

´´´
Agente = Modelo + Harness
´´´

## LLMs


## Referencias

1. Russell, S. J., & Norvig, P. (2010). Inteligência Artificial: Uma Abordagem Moderna (3ª ed.). Elsevier. (Capítulo 2: Agentes Inteligentes).
2. Wooldridge, M., & Jennings, N. R. (1995). Intelligent agents: Theory and practice. The Knowledge Engineering Review, 10(2), 115-152.
3. https://www.shawnewallace.com/2026-08-12-lets-talk-about-agents/