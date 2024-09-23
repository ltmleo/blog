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

Agora que definimos o conceito da antifragilidade, podemos explorar alguns outros conceitos que Taleb apresenta em seu livro, como a identificação da fragildade. Nas proximas sessões, serão apresentados alguns conceitos que podem ser utilizados para identificar a fragildade.

### Eventos Cisnes Negros
Esse conceito foi introduzido por Taleb no livro “A Lógica do Cisne Negro” publicado em 2007, onde ele destaca que apensar das analises de projeções, sistemas complexos estão sujeitos a reviravoltas imprevisiveis.

O nome Cisne negros vem pelo fato de que no passado na Europa, tinha-se a crença de que só existiam cisnes brancos, mas com o descobrimento de cisnes negros na Australia, todo essa crença foi por água a baixo. 

Taleb descreve os eventos cisne negros como eventos altamente impactantes, raros e imprevisiveis. Muitas vezes esses eventos, retrospectivamente são atribuidos a explicações convenientes. Em resumo, são events díficies de prever mas que precisamos estar sempre preparados. 

### O Peru de Natal
Outr


### O Problema de Lucrecio

## Técnicas antifrágeis

### Exposição controlada (Mitridatização)
### Opções assimétricas (Estrategia de Barbell)
### Descentralização e Diversidade
### Redundância planejada
### Aprendizado Continuo

## Software Antifgragil
### Postmortem
### Blameless Culture
### Game Day
### Continuous integration / Continuous Delivery  (CI/CD)
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