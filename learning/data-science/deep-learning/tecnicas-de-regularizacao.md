# Técnicas de regularização

## Dropout

Técnica de regularização que consiste em desligar aleatoriamente um percentual de neurônios durante o treinamento da rede. Isso evita que a rede decore os dados de treinamento, forçando-a a aprender padrões mais gerais.

## L1

Ajustes de pesos, foco no valor do peso, o peso é ajustado ate valor proximo de zero dependendo do valor da sua importância.

## Early Stopping

Técnica de regularização que consiste em interromper o treinamento da rede quando o erro de validação começa a aumentar. Isso evita que a rede decore os dados de treinamento.


## Batch

Técnica de regularização que consiste em dividir o conjunto de dados em lotes menores e treinar a rede com esses lotes. Isso evita que a rede decore os dados de treinamento.

## Hiperparâmetros

São parâmetros que não são aprendidos durante o treinamento da rede, mas que afetam o desempenho da mesma. Exemplos de hiperparâmetros são a taxa de aprendizado, o número de épocas e o tamanho do lote.

Podemos utilizar cross-validation ou grid search para encontrar os melhores hiperparâmetros para a nossa rede.

## AutoML

AutoML é uma abordagem que visa automatizar o processo de construção de modelos de aprendizado de máquina. Ela pode ser usada para otimizar hiperparâmetros, selecionar algoritmos e até mesmo pré-processar os dados.

- Autokeras, H20
- Transfer Learning
- Grid Search


## Cross-validation (k-fold)

Cross-validation é uma técnica que consiste em dividir o conjunto de dados em k partes e treinar o modelo k vezes, cada vez utilizando uma parte diferente como conjunto de validação. Isso permite avaliar o desempenho do modelo de forma mais robusta.


## Otimização de hiperparâmetros

Otimização de hiperparâmetros é o processo de encontrar os melhores hiperparâmetros para o nosso modelo. Isso pode ser feito manualmente ou automaticamente, utilizando:

- ADAGRAD
- ADAM
- RMSPROP

### Minimo Local e Ponto de Sela

- **Minimo Local**: Ponto onde a derivada é zero, mas não é o menor valor da função.
- **Ponto de Sela**: Ponto onde a derivada é zero, mas não é o menor valor da função.
- **Minimo Global**: Ponto onde a derivada é zero e é o menor valor da função.
- **Gradiente Descendente**: Algoritmo utilizado para encontrar o minimo global.

![Loss](https://pyimagesearch.com/wp-content/uploads/2019/08/learing_rate_finder_lr_plot.png)

### Momentum

Momentum é um hiperparâmetro que controla a velocidade de atualização dos pesos durante o treinamento da rede. Ele é utilizado para acelerar a convergência do modelo e evitar que ele fique preso em mínimos locais.