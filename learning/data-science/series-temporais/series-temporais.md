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
- **Média**: usa a média histórica como previsão para o futuro
- **Drift**: faz uma previsão que acompanha a tendência da série (equivale a traçar uma renta entre o primeiro e o último ponto)

## Para saber mais

- Moderem Time Series Forecasting with Python
- Forecasting: Principles and Practice, de Rob J Hyndman e George Athanasopoulos
- Introdução à Séries Temporais
- Analise de Séries Temporais
