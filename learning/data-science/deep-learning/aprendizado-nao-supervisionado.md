# Deep Learning não supervisionado

- Clusterização
- Redução de dimensionalidade
- Sistemas de recomendação
- Reconstrução de imagens

## Modelos baseados em energia

**Objetivo**: Reduzir a energia de um sistema para encontrar um estado de equilíbrio.
Similar ao problema com a função custo.

### Maquinas de Boltzmann

A Maquina de Boltzmann é um modelo probabilístico que consiste em uma rede de unidades que se comunicam entre si. Cada unidade é uma variável aleatória binária que representa um neurônio. As unidades são conectadas por arestas que possuem pesos associados,

- é uma FNN de uma camada.

#### Aprendizado pela divergência contrastiva

O algoritmo de aprendizado pela divergência contrastiva é um método de aprendizado não supervisionado para redes neurais. O objetivo é aprender os pesos da rede para que a distribuição de probabilidade dos dados seja a mesma que a distribuição de probabilidade dos dados reais.

A divergência contrastiva é uma técnica de treinamento alternativa para aproximar a inclinação gráfica que representa a relação entre os pesos de uma rede e seu erro, chamada de gradiente. Como a maioria dos algoritmos de aprendizado probabilístico tenta otimizar o valor da probabilidade logarítmica, esse gradiente representa a direção desejada de mudança, de aprendizado, para os parâmetros da rede.

A diferença entre a entrada e r é verificada pala divergência de Kullback-Leibler.

## DBN - Deep Belief Networks

- É uma rede de Boltzmann restrita.
- É possível empilhar RBMs para formar uma DBN.

## Autoencoders

- É uma rede neural que tenta aprender uma representação compacta dos dados.
- É composta por duas partes: Encoder e Decoder.
- O Encoder tenta aprender uma representação compacta dos dados.
- O Decoder tenta reconstruir os dados originais a partir da representação compacta.
- A função de custo é a diferença entre a entrada e a saída do Decoder.
- O objetivo é minimizar a função de custo.
- Etapa de enconde - codifica a imagem em uma dimensionalidade menor.
- Etapa de decode - decodifica a imagem de forma a reconstruir o input.

### Autoencoders Esparsos

- Aplica um termo de regularização para forçar a rede a aprender uma representação esparsa dos dados.
- Semelhante a técnica de Dropout, onde apaga-se aleatoriamente neurônios da rede.
  
### Autoencoders Denoising

- Adiciona ruído aos dados de entrada para forçar a rede a aprender uma representação robusta dos dados.

### Autoencoders Contrativo

- Inclui penalidade na função custo

## GAN - Generative Adversarial Networks 

Generative Adversarial Networks (Redes Generativas Adversárias)

- Duas redes competindo entre si.
- Modelo generativo
- Modelos discriminativos Aprendem a fronteira entre classes de dados.
- Realiza o backpropagation para treinar o modelo generativo.
- O Gerador ira gerar imagens cada vez melhores enquanto o discriminador irá melhorar em discriminar imagens reais de falsas.
  
## Para saber mais

- https://douglasduhaime.com/
- https://douglasduhaime.com/posts/visualizing-latent-spaces.html