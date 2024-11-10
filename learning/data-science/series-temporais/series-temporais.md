# Séries Temporais

Conjunto de observações ordenadas no tempo.

![Séries Temporais](https://limnonews.wordpress.com/wp-content/uploads/2014/09/imagem11.png)

Se n>=50, chame-se sucessão cronológica.

Elementos de uma série temporal:

- Medida (indice, preço, temperatura...)
- Fato (Ibovespa, Saca do cafe, temperatura de uma cidade...)
- Unidade de tempo (hora, dia, mês, ano...)

- **Univariadas**: Apenas uma variável conectada ao tempo
- **Multivariadas**: DUas ou mais variáveis conectadas ao tempo

## Objetivo do estudo de séries temporais

- Investigação do mecanismo gerador dos dados;
- Fazer previsões de valores futuros;
- Descrever apenas o comportamento da série;
- Procurar periodicidades relevantes na série;

## Classificação das séries temporais

- **Determinísticas**: Modelo determinístico, onde o valor futuro é determinado por um modelo matemático.
- **Estocásticas**: Modelo estocástico, onde o valor futuro é determinado por um modelo probabilístico.

## Media móvel

Media que se desloca ao longo do tempo.

### Componentes de uma série temporal

- **Tendência**: Crescimento, decrescimento ou estacionalidade da série temporal.
- **Sazonal***: Padrões que se repetem em intervalos regulares (dia, semana, mes...).
- **Cíclica**: Padrões que se repetem em intervalos não regulares (sem período fixo e longos).

Muitas series apresentam junto a tendência, variações cíclicas e  sazonais. Se estiverem presentes, a série é chamada de **aditiva**. Se a tendência for multiplicativa, a série é chamada de **multiplicativa**.

Aditiva:

```math
Y = T + S + C + E
```

Multiplicativa:

```math
Y = T * S * C * E
```

Onde:

- Y: Valor da serie no tempo t
- T: Componente de tendência para o instante t
- S: Componente sazonal para o instante t
- C: Componente cíclica para o instante t
- E: Componente de erro para o instante t

O modelo aditivo é mais apropriado quando as variações sazonais são constantes ao longo do tempo. O modelo multiplicativo é mais apropriado quando as variações sazonais são proporcionais ao nível da série.

## Decompondo uma serie temporal

Decompor a série temporal em:

- Componente de tendencia
- Componente de Sazionalidade
- Residuos


## Estatisticas de erro das previsões

-**ME: Mean Error** - é a média da diferença entre realizado e o previsto

```plaintext
erro_t = X_t - x_t
ME = (SUM erro_t)/h
```

- **MAE: Mean Absolute Error **- é a média da diferença absoluta entre realizado e previsto

```plaintext
MAE = (SUM |erro_t|)/h
```

- **RMSE: Root Mean Square Error** - É o desvio padrão total da amostra da diferença entre o previsto e o realizado

```plaintext
RMSE = sqrt(SUM (erro_t)^2)/h)
```

- **MPE: Mean Percentage Error** - é a diferença percentual do erro

```plaintext
MPE = (SUM(erro_t/X_t)/h)*100%
```

- **MAPE: Mean Absolute Percentage Error** - É a diferença absoluta percentual do erro

```plaintext
MAPE = (SUM(|erro_t/X_t|)/h)*100%
```

- **TIC: Theil Inequality Coefficient** - Theil's U - É o grau de ajuste da previsão. Quanto menor, melhor. Zero é o ideal.

```plaintext
Theil's U = sqrt(SUM((x_t+1-X_t+1)/X_t)^2)/SUM((X_t+1-X_t)/X_t)^2))
```

- **ACF1: First-Order Autocorrelation Function** - Autocorrelação dos residuos

```plaintext
ACF_k = cov(R_it, Ri,t-k)/variancia(Rit)
```

## Metodos Simples

- **NAIVE**: Projeta o último valor para o futuro
- **NAIVE SAZONAL**: Considera o último valor no mesmo período de tempo (para séries com sazonalidade)
- **Média**:  usa a média histórica como previsão para o futuro
- **Drift**: faz uma previsão que acompanha a tendência da série (equivale a traçar uma renta entre o primeiro e o último ponto)

## Metodos mais complexos

- **Modelos de Suavização Exponencial (SES)**: Série temporal que não apresenta tendência e nem sazonalidade;
- **Suavização Exponencial de Holt (SEH)**: Série temporal com Tendência mas sem sazonalidade;
- **Suavização Exponencial de Holt-Winters**: Série temporal com Tendência e Sazonalidade;

A característica principal da suavização exponencial é dar pesos maiores às observações mais recentes, captando melhor as mudanças de comportamento. Ao atribuir pesos maiores aos dados mais recentes, o modelo se torna mais sensível a mudanças recentes no comportamento da série temporal, adaptando-se melhor a tendências e variações.

O componente de tendência pode ser definido pelas médias móveis, sendo α um coeficiente entre [0, 1] que pondera a contribuição dos valores passados. O parâmetro α, de fato, controla o peso dado às observações passadas no cálculo da tendência. Valores de α mais próximos de 1 atribuem mais peso aos dados mais recentes, enquanto valores mais próximos de 0 dão mais peso aos dados mais antigos. A escolha de α influencia diretamente a suavidade da tendência estimada.

A suavização exponencial, como outros métodos de previsão, funciona melhor com um número razoável de observações. Com poucos dados, a estimativa dos parâmetros do modelo pode ser instável e as previsões menos precisas. É recomendado ter um histórico de dados suficientemente longo para obter resultados confiáveis.

O método de Suavização Exponencial de Holt é semelhante ao método de Suavização Exponencial Simples, mas, em vez de suavizar apenas o nível, ele utiliza uma nova constante de suavização para modelar a tendência da série.

O método de Holt é uma extensão do método de suavização exponencial simples. Enquanto o método simples considera apenas o nível da série, o método de Holt incorpora um componente de tendência, permitindo modelar séries com um comportamento crescente ou decrescente ao longo do tempo. A introdução de uma nova constante de suavização (β) permite ajustar a suavidade da tendência estimada.

O método de Suavização de Holt-Winters pode também ser chamado de método de Suavização Exponencial Tripla, pois é muito utilizado quando há necessidade de calcular previsões em séries temporais que possuem tendência e sazonalidade.
O método de Holt-Winters é frequentemente chamado de método de suavização exponencial tripla porque ele incorpora três componentes: nível, tendência e sazonalidade. Essa característica o torna uma ferramenta poderosa para modelar séries temporais com padrões sazonais, como dados de vendas mensais ou dados climáticos anuais.

Existem tanto modelos de Holt-Winters aditivos quanto multiplicativos. A escolha entre os dois depende do tipo de sazonalidade presente na série.
Modelos aditivos: A componente sazonal é adicionada ao nível e tendência. São mais adequados quando a magnitude da sazonalidade permanece relativamente constante ao longo do tempo.
Modelos multiplicativos: A componente sazonal é multiplicada pelo nível e tendência. São mais adequados quando a magnitude da sazonalidade varia proporcionalmente ao nível da série.

## Para saber mais

- Moderem Time Series Forecasting with Python
- Forecasting: Principles and Practice, de Rob J Hyndman e George Athanasopoulos
- Introdução à Séries Temporais
- Analise de Séries Temporais
