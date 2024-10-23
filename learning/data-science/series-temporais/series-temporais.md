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



## Para saber mais

- Moderem Time Series Forecasting with Python
- Forecasting: Principles and Practice, de Rob J Hyndman e George Athanasopoulos
- Introduç˜ao à Séries Temporais
- Analise de Séries Temporais
