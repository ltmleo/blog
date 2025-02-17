# Rede Neural 

## Introdução

Redes neurais são modelos de aprendizado de máquina inspirados no cérebro humano. Eles são compostos por camadas de neurônios que se comunicam entre si por meio de conexões. Cada conexão tem um peso associado que é ajustado durante o treinamento do modelo.

Redes neurais tem tido muito sucessos em tarefas de visão computacional, processamento de linguagem natural e reconhecimento de voz.

![Rede Neural](https://miro.medium.com/v2/resize:fit:720/format:webp/1*xwD8SAjzQ52v7NnJ-1eweQ.gif)

## Função de Ativação

Cada neurônio em uma rede neural tem uma função de ativação que determina se o neurônio deve ser ativado ou não. As funções de ativação mais comuns são:

- **Sigmoid**: Mapeia valores para o intervalo [0, 1]. É usada em camadas de saída para problemas de classificação binária.
- **Tanh**: Mapeia valores para o intervalo [-1, 1]. É usada em camadas ocultas.
- **ReLU**: Retorna 0 se o valor de entrada for negativo, caso contrário, retorna o valor de entrada. É a função de ativação mais comum em redes neurais.
- **linear**: Retorna o valor de entrada. É usada em camadas de saída para problemas de regressão.

## Perceptron

O perceptron é a unidade básica de uma rede neural. Ele recebe um vetor de entrada, multiplica cada elemento pelo peso associado e passa o resultado pela função de ativação.

O perceptron é um classificador linear que pode ser treinado para separar duas classes. Combinações de perceptrons formam redes neurais.

## Conclusão

- Rede neural é uma introdução ao deeplearning.
- São poderosas e flexíveis.
- Requerem poder computacional especial (GPU / TPU)
- São famosas em dados não estruturados (ex. imagens, texto, áudio)

## Referências

- https://medium.com/@maykekend/como-definir-a-quantidade-de-camadas-escondidas-em-uma-rede-neural-artificial-eb5cdbc89cf9