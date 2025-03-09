# Deep Learning

## Rede Neural

- Cada neurônio recebe dados de entrada ou da camada anterior
- Diferente da regressão que so tem input e output
- Cada neurônio tem um peso associado

```plaintext
z1 = w11*x1 + w21*x2 + w31*x3 + b
```

- Como determinar os pesos?
- Iniciar de forma aleatória ou regra pré-definida?

## Função de ativação

A **Função de ativação**: função que determina se o neuronio deve ser ativado ou não. Processa o sinal gerado pela combinação linear das entradas e dos pesos das sinapses, para gerar o sinal de saída do neuronio.

Ou seja, a função de ativação é uma função matemática que determina se um neurônio deve ser ativado ou não. Ela faz o processamento da informação que entra no neuronio e gera um sinal de saída, podemos ter respostas lineares ou não lineares.

- (ReLu) Rectified Linear Unit - Função de ativação mais utilizada. Para decidir o resultado, ela verifica se o valor é maior que 0, se sim, retorna o valor, se não, retorna 0.

```plaintext
f(z) = 1 se z >= 0, 0 se z < 0
```

- (Sigmoid) Função sigmoide - Utilizada para problemas de classificação binária. Retorna valores entre 0 e 1.

```plaintext
g(z) = e^(z) / (1 + e^(z))
```

- Peso a ser multiplicado pela entrada depende do par origem/destino
- Resultado é inserido dentro de uma função de ativação
- A depender do resultado, tal como em neurônios biológicos, o neurônio é ativado ou não
- Para determinar os pesos, podemos iniciar com valores aleatórios e ir ajustando, ou com valores pré-definidos por uma regra.

## Erro residual

O erro residual é a diferença entre o valor previsto e o valor real.

```plaintext
Erro_residual_j = Valor_real_j - Valor_estimado_j
```

### Função de custo

Função que mensura o que antos estamos acertando. O objetivo é minimizar essa função.

```plaintext
E = 1/2 * SUM(Valor_real - Valor_estimado)^2
```

### Descida do gradiente

Processo utilizado para encontrar o mínimo de uma função com base em variações de pesos.
Utiliza Backpropagation para ajustar os pesos, os erros obtidos são propagados de volta para a rede.

## Redes Neurais Multicamadas (Deep Learning)

Como resolver o problema Xor?

- Multicamadas permitem identificar relações não lineares
- No caso de termos varias camadas intermediarias, chamamos de Deep Learning


### Estrutura da rede

- **Camadas**: Grupo de neurônios em um estágio do processo
- **Camada Densa**: Conecta cada neurônio de uma camada com todos os neurônios da camada seguinte (não conecta com neurônios da mesma camada). Se a camada tem 5 neurônios, e a camada seguinte tem 3, teremos 5*3 = 15 conexões.

### Vies X Variância

- **Vies**: Erro sistemático, erro que não depende da quantidade de dados. O modelo não consegue capturar a complexidade dos dados. (Redução de vies: Na media você acerta)
- **Variância**: Erro aleatório, erro que depende da quantidade de dados. O modelo é muito complexo e acaba decorando os dados. (Redução de variancia: Tiro ao alvo)

![Vies X Variância](https://www.appliedaicourse.com/blog/wp-content/uploads/2024/09/low-variance-and-high-variance-947x1024.webp)

Importancia da generalização do modelo - Teoria do Mapa.

![Biass-Variance](https://media.geeksforgeeks.org/wp-content/uploads/20200107023418/1_oO0KYF7Z84nePqfsJ9E0WQ.png)

### Overfitting X Underfitting

- **Overfitting**: Modelo muito complexo, decorando os dados de treinamento, mas não consegue generalizar para novos dados.
- **Underfitting**: Modelo muito simples, não consegue capturar a complexidade dos dados.

![Over X Under](https://i0.wp.com/thecorrelation.in/wp-content/uploads/2022/06/Sambhav-e7a6ca0c.png?fit=2000%2C1414&ssl=1)


## Termos

- **Epocas**: Quantidade de vezes que o modelo irá treinar com o mesmo conjunto de dados.
- **Batch**: Quantidade de dados que o modelo irá treinar por vez.
- **Iterações**: Quantidade de vezes que o modelo irá treinar com um batch.
- **Batch Size**: Quantidade de dados que o modelo irá treinar por vez.
- **Learning Rate**: Taxa de aprendizado, define o quanto os pesos serão ajustados a cada iteração.
- **Momentum**: Controla a velocidade de atualização dos pesos durante o treinamento da rede.
- **Regularização**: Técnica utilizada para evitar overfitting.
- **Dropout**: Técnica de regularização que consiste em desligar aleatoriamente um percentual de neurônios durante o treinamento da rede.
- **Early Stopping**: Técnica de regularização que consiste em interromper o treinamento da rede quando o erro de validação começa a aumentar.
- **Batch Normalization**: Técnica utilizada para normalizar os dados de entrada da rede.
- **Data Augmentation**: Técnica utilizada para aumentar a quantidade de dados de treinamento.
- **Transfer Learning**: Técnica utilizada para transferir o conhecimento de um modelo pré-treinado para um novo modelo.
- **AutoML**: Abordagem que visa automatizar o processo de construção de modelos de aprendizado de máquina.
- **Cross-validation**: Técnica que consiste em dividir o conjunto de dados em k partes e treinar o modelo k vezes, cada vez utilizando uma parte diferente como conjunto de validação.
- **Otimização de hiperparâmetros**: Processo de encontrar os melhores hiperparâmetros para o nosso modelo.
- **Gradiente Descendente**: Algoritmo utilizado para encontrar o mínimo global de uma função.


## Para saber mais
- https://support.minitab.com/pt-br/minitab/
