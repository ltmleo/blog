# Deep Learning

## Rede Neural

- Cada neuronio recebe dados de entrada ou da camada anterior
- Diferente da regressão que so tem input e output
- Cada neuronio tem um peso associado

```plaintext
z1 = w11*x1 + w21*x2 + w31*x3 + b
```

## Função de ativação

A **Função de ativação**: função que determina se o neuronio deve ser ativado ou não. Processa o sinal gerado pela combinação linear das entradas e dos pesos das sinapses, para gerar o sinal de saída do neuronio.

Ou seja, a função de ativação é uma função matemática que determina se um neuronio deve ser ativado ou não. Ela faz o processamento da informação que entra no neuronio e gera um sinal de saída, podemos ter respostas lineares ou não lineares.

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

