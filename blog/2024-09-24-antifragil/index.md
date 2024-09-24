---
tags: [devops, sre, chaos, antifragil]
authors: [ltmleo]
---
# Além da resiliência: Construindo sistemas que se beneficiam das falhas

Na ultima quarta-feira (18/09/2024) tive a oportunidade de apresentar uma palestra na trilha digital de arquitetura e segurança da Vivo no [TDC](https://thedevelopersconference.rds.land/sp24-vivo) 2024. 

O TDC (The Developers Conference) é um dos maiores eventos de tecnologia do Brasil e reúne profissionais de diversas áreas para discutir as tendências e desafios do mercado de tecnologia. A edição de 2024 foi realizada de forma híbrida, com palestras presenciais em São Paulo e online para todo o Brasil.

O tema da palestra foi **"Além da resiliência: Construindo sistemas que se beneficiam das falhas"**. Neste post, vou compartilhar um resumo do conteúdo apresentado.

{/* truncate */}

## Além da Resiliência

Para entender como podemos ir além da resiliência, é importante primeiro entender o que é resiliência. Resiliência é a capacidade de um sistema de se recuperar de falhas e continuar funcionando normalmente. Se pensarmos do ponto de vista do comportamento que um sistema apresenta com relação a falhas ou estresse, podemos classificá-lo em três categorias

- Os que se quebram: são sistemas frágeis, que não conseguem lidar com falhas e param de funcionar quando algo dá errado.
- Os que são inertes: são sistemas resilientes, que conseguem se recuperar de falhas e continuar funcionando, mas não aprendem com os erros e não melhoram sua capacidade de lidar com falhas no futuro.
- Os que se beneficiam: são sistemas antifrágeis, que não apenas se recuperam de falhas, mas também aprendem com elas e melhoram sua capacidade de lidar com falhas no futuro.

![Ganho vs Estresse](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40bhbenam%2Fantifragile-or-safe-a-new-perspective-on-system-design-8fb5d99badb5&psig=AOvVaw3khSIzLJZw4MpRN6uNi3BF&ust=1727177387658000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiHt6z72IgDFQAAAAAdAAAAABAU)

Podemos notar que um novo termo surgiu "Antifrágil", nas próximas sessões esse termo será melhor explorado.

## Antifragilidade

O conceito de antifragilidade foi introduzido por Nassim Nicholas Taleb em seu livro "Antifrágil: Coisas que se beneficiam com o caos". Segundo Taleb, um sistema antifrágil é aquele que se beneficia de falhas e estresse, tornando-se mais forte e mais resiliente à medida que é exposto a eventos adversos.

O termo surgiu quando Taleb não encontrou uma palavra para descrever o oposto de frágil. Ele percebeu que o termo "Robusto" ou "Resiliente" não era suficiente, pois um sistema robusto simplesmente resiste a falhas, enquanto um sistema antifrágil se beneficia delas, e assim como "Neutro" não é o oposto de "Negativo" e sim "Positivo", "Resiliente" não é o oposto de "Frágil" e sim "Antifrágil".

Taleb descreve a antrifragildade como "Qualquer coisa que apresenta mais vantagens a partir de certos impactos, o inverso é frágil" e propõe que é muito mais fácil saber se uma coisa ou situação é frágil do que prever um evento capaz de danifica-la, o que fica muito claro quando imaginamos uma situação de fragildiade, como uma taça de cristal equilibrada em uma mesa, é muito mais fácil prever que ela quebrará se cair do que prever o evento que a fará cair. 

Outro conceito interessante é o de que sistemas complexos enfraquecem e até mesmo morrem quando são privados da exposição a estresse, ou seja, a exposição a eventos adversos é necessária para o crescimento e a evolução de um sistema. Podemos pensar no corpo humano, que se não estiver sempre em movimento, se exercitando e submetendo-se a pequenos níveis de estresse, perde massa muscular e se deteriora com o tempo.

## Indentificando a fragildidade

Agora que definimos o conceito da antifragilidade, podemos explorar alguns outros conceitos que Taleb apresenta em seu livro, como a identificação da fragildade. Nas próximas sessões, serão apresentados alguns conceitos que podem ser utilizados para identificar a fragildade.

### Eventos Cisnes Negros
Esse conceito foi introduzido por Taleb no livro "A Lógica do Cisne Negro" publicado em 2007, onde ele destaca que apensar das analises de projeções, sistemas complexos estão sujeitos a reviravoltas imprevisíveis.

O nome Cisne negros vem pelo fato de que no passado na Europa, tinha-se a crença de que só existiam cisnes brancos, mas com o descobrimento de cisnes negros na Australia, todo essa crença foi por água a baixo. 

Taleb descreve os eventos cisne negros como eventos altamente impactantes, raros e imprevisíveis. Muitas vezes esses eventos, retrospectivamente são atribuídos a explicações convenientes. Em resumo, são events difíceis de prever mas que precisamos estar sempre preparados. 

### O Peru de Natal
Outro conceito introduzido por Taleb é o Peru de Natal, que é uma metafora visual para ilustrar a fragilidade. O peru é alimentado todos os dias, bem tratado e protegido, até que chega o dia de Natal, onde ele é morto e servido como jantar. O peru não tem como prever o que acontecerá no dia de Natal, pois todos os dias anteriores foram de prosperidade e bem-estar. Essa metáfora mostra que a "Ausencia da evidência não é evidência da ausência", ou seja, precisamos buscar outros pontos de vista e considerar outras possibilidades além das que já conhecemos, pois o que não sabemos pode ser mais importante do que o que sabemos.

### O Problema de Lucrecio
O Problema de Lucrecio é uma analogia que Taleb faz com o poeta romano Lucrecio. Resumidamente, "O tolo acredita que a montanha mais alta do mundo é a montanha que ele viu". O problema de Lucrecio é a crença de que o que não vemos não existe, ou seja, acreditar que o que não conhecemos não é importante. Taleb usa essa analogia para ilustrar que muitas vezes não consideramos o que não conhecemos, e isso pode ser um grande erro, pois o que não conhecemos pode ser mais importante do que o que conhecemos.

Fukushima é um exemplo, pois foi projetada para aguentar o maior terremoto já registrado no Japão, até que um terremoto maior aconteceu e a usina não aguentou. Precisamos estar preparados para o inesperado, pois o inesperado é o que mais nos impacta.

## Técnicas antifrágeis

Nessa sessão, serão apresentadas algumas técnicas que o Taleb propõem para aumentar a  antifragilidade de sistemas.

### Exposição controlada (Mitridatização)
Mithridatização é o processo de tornar-se resistente a um veneno, ingerindo pequenas doses do veneno ao longo do tempo. O nome vem de Mithridates VI, um rei Turco, que paranoico pela morte de seu pai por envenenamento, começou a ingerir pequenas doses de veneno para se tornar resistente a ele. Algum tempo depois, Mithridates foi capturado por seus inimigos e tentou se matar tomando veneno, mas não conseguiu, pois seu corpo estava resistente a ele.

Taleb propõe que a exposição controlada a eventos adversos é uma forma de aumentar a antifragilidade de um sistema, assim como o corpo humano, que se torna mais forte quando exposto a pequenos níveis de estresse.

Podemos ver com essa técnica que o antifragil é um conceito muito antigo que somente não tinha um nome para o descrever.


### Opções assimétricas (Estrategia de Barbell)
A estratégia de barbell é uma técnica quue consiste em dividir as opções em dois extremos, um extremo extremamente seguros e o outro extremamente arriscados, evitando o moderado ou que está no centro. Taleb propõe que essa técnica é uma forma de aumentar a antifragilidade de um sistema, pois se um dos extremos falhar, o outro compensará.

A ideia é sempre fazer uma análise do risco associado, tolerando perdas limitadas e tendo aversão a perdas excisavas. Trabalhar de uma forma a potencializar o ganho, e a longo prazo, assim, quando um lado estiver exposto a um evento cisne negro o outro compensa e ganha com essa exposição. 

Aqui sempre precisamos experimentar e inovar, pois enquanto de um lado temos a segurança, do outro precisamos dessa exposição.

### Descentralização e Diversidade
Se pensarmos em um individuo, ele é Antifrágil, pois como vimos, seu corpo se beneficia de pequenos estresses, como por exemplo ir a academia, porém esse individuo ainda é frágil, pois se ele morrer tudo relaciona a ele se vai também. Em contra partida o conjunto de individuo, como uma sociedade, é antifragil, pois se um individuo morrer, a sociedade continua, e se um individuo se beneficia de um estresse, a sociedade como um todo se beneficia.

Um ótimo exemplo de Descentralização e Diversidade é a vida, pois é adaptada aos mais diversos ambientes. E mesmo grandes eventos cisne negros como cinco extinções em massa, a vida ainda prospera. A máxima "Sistemas complexos enfraquecem e morrem na ausência de estressores" ilustra bem o que acontece na vida, pois, sem eventos estressores como a seleção natural, a vida deixa de evoluir e se adaptar, tornando-a mais suscetível a impactos.

### Redundância planejada
Como vimos, ter redundância é uma ótima abordagem para que sistemas resistam a choques e estresse, porém, somente a redundância não é suficiente para beneficiar um sistema em caso de falha, precisamos planejar a redundância, para que em determinados choques, o sistema possa se recuperar de forma rápida e eficiente e melhorar com isso.

Em alguns pontos do sistema preciso ter diversos níveis de redundância, porém em outros talvez não precise, precisamos sempre planejar de uma forma a otimizar os custos envolvidos, a segurança necessária e a capacidade de experimentar e inovar, como vimos nas opções assimétricas. 

### Aprendizado Continuo
Talvez um dos pontos mais importantes quando tratamos de antifragilide seja a capacidade de aprender com os eventos passados.
Conforme viemos em quase todas as técnicas apresentadas, precisamos sempre experimentar e inovar, e para isso precisamos aprender com os erros e acertos. A ideia é sempre melhorar e evoluir, e para isso precisamos aprender com o que aconteceu.

Podemos pensar nas máximas, "1% melhor a cada dia" ou "Fail fast, learn fast", que ilustram bem o que precisamos fazer para melhorar e evoluir. A ideia é sempre aprender com o que aconteceu, e melhorar a cada dia, e para isso precisamos sempre estar aprendendo.

Um exemplo de sucesso é a industria aérea, que a cada incidente aprende com os erros e acertos, e melhora todos os sistemas, tornando-se a cada dia mais segura e eficiente.

## Software Antifgragil
Nesta sessão, utilizaremos os conceitos introduzidos por Taleb para explorar como podemos aplicar a antifragilidade em sistemas de software.

### Postmortem
### Blameless Culture
### Game Day
### Continuous integration / Continuous Delivery  (CI/CD)
### Disaster Recovery
### Arquitetura desacoplada
### Segurança Ofensiva
### Teste de estresse
### Teste de mutação
### Canary Deployment
### Chaos Engineering

## Conclusão

## Para saber mais

## Esse trabalho não termina aqui