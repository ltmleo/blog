# Modelos Ensemble

Um ensemble é um modelo que combina vários modelos de aprendizado de máquina para criar um modelo mais poderoso.

Modelo supervisionado, mas podemos aplicar em modelos não supervisionados.

## Tipos de Ensemble

**Bagging**: Utiliza o mesmo algoritmo de aprendizado de máquina para treinar subconjuntos em diferentes conjuntos de dados.

**Boosting**: Utiliza o mesmo algoritmo de aprendizado de máquina para treinar subconjuntos em diferentes conjuntos de dados, mas o treinamento é feito de forma sequencial.

**Stacking**: Utiliza diferentes algoritmos de aprendizado de máquina e combina suas previsões.

## Begging

Pode ser chamado de pasting.

Begging é um aggregation

Begging = Bootstrap + Aggregation

Begging é um método de ensemble que utiliza o mesmo algoritmo de aprendizado de máquina para treinar subconjuntos em diferentes conjuntos de dados.

O begging com árvores de decisão é conhecido como **Random Forest**

Características:
 
1. Roda em paralelo
2. Também classifica em paralelo
3. Costuma ter bom desempenho sem grandes ajustes de hiperparâmetros
4. Robusto a outliers

### Bootstrapping


Bootstrapping é uma técnica de amostragem que consiste em criar várias amostras de um conjunto de dados com reposição.

1. Retirar uma amostra aleatória de tamanho N da base
2. Calcular o parâmetro e armazenar a informação
3. Repetir o processo M vezes (1000x)
4. Calcular a média dos parâmetros e o erro do desvio padrão estimador.


### Grid

O grid é uma matriz de hiperparâmetros que serão testados. O modelo é treinado com todas as combinações de hiperparâmetros. O modelo com o melhor desempenho é escolhido.

Podemos utilizar o random search para cobrir mais combinações de hiperparâmetros.

O random search seleciona aleatoriamente os hiperparâmetros.

## Stacking

Stacking é um método de ensemble que utiliza diferentes algoritmos de aprendizado de máquina e combina suas previsões em um modelo final.

## Boosting

Boosting é um método de ensemble que utiliza o mesmo algoritmo de aprendizado de máquina para treinar subconjuntos em diferentes conjuntos de dados, mas o treinamento é feito de forma sequencial.

O Gradient Boosting é um dos algoritmos de boosting mais populares. Ele é um método de ensemble que utiliza o gradiente descendente para minimizar o erro. 

XGBoost é uma implementação do Gradient Boosting.

Hiperparâmetros:

* Gama: Redução minima de perda
* Eta: Learning rate
* Colsample_bytree: Porcentagem de colunas a serem amostradas
* Subsample: Porcentagem de linhas a serem amostradas
* Nrounds: Número de arvores sequenciais
* Max_depth: Profundidade máxima da árvore
* Min_child_weight: Peso mínimo da folha

LightGBM é uma versão mais eficiente do XGBoost.

## Conclusão

Existem infinitas possibilidades de combinações de modelos de ensemble. O importante é entender o problema e escolher a melhor combinação de modelos para resolvê-lo.

Estes modes são difíceis de interpretar, mas são muito poderosos.

O Cross validation entra no lugar do step-wise

Quando temos muitas variáveis, podemos utilizar PCA para reduzir a dimensionalidade.

XGBoost é um modelo delicado que leva um tempo maior de tunning.

Quanto maior o valor do feature_importances_ para uma determinada característica, maior a sua importância na decisão final do modelo.

