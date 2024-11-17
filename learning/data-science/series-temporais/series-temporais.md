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

O **método de Suavização de Holt-Winters** pode também ser chamado de método de Suavização Exponencial Tripla, pois é muito utilizado quando há necessidade de calcular previsões em séries temporais que possuem tendência e sazonalidade.

O método de Holt-Winters é frequentemente chamado de método de suavização exponencial tripla porque ele incorpora três componentes: nível, tendência e sazonalidade. Essa característica o torna uma ferramenta poderosa para modelar séries temporais com padrões sazonais, como dados de vendas mensais ou dados climáticos anuais.

Existem tanto modelos de Holt-Winters aditivos quanto multiplicativos. A escolha entre os dois depende do tipo de sazonalidade presente na série.

**Modelos aditivos**: A componente sazonal é adicionada ao nível e tendência. São mais adequados quando a magnitude da sazonalidade permanece relativamente constante ao longo do tempo.
Modelos multiplicativos: A componente sazonal é multiplicada pelo nível e tendência. São mais adequados quando a magnitude da sazonalidade varia proporcionalmente ao nível da série.

## Modelos ARIMA (Box-Jenkins)

- Robusto: pode ser aplicado em praticamente qualquer tipo de série temporal
- Funciona melhor com dados estáveis, com poucos outliers (embora podemos removê-los) -
tsclean
- Requer dados estacionários
- Pode ser transformada usando diferenciação: remove tendências
- Diferenciação: subtrai a observação atual da anterior
- Diferenciação pode ser feita 1x: diferenciação de primeira ordem 
- Diferenciação2x:diferenciação de segunda ordem(mais raro)

```plaintext
ARIMA = (p,d,q)
```

![ARIMA](https://www.revistaespacios.com/a20v41n15/20-f02.png)

- **p**: Ordem do componente autoregressivo (AR). Indica a dependência do valor atual da série em relação a seus valores passados.
- **d**: Ordem de diferenciação. Indica o número de vezes que a série é diferenciada para torná-la estacionária.
-**q**: Ordem do componente de média móvel (MA). Indica a dependência do valor atual da série em relação aos erros de previsão passados.

### Tipos de moelos ARIMA

- Modelos autorregressivos (AR): avalia a relação entre os períodos (lags): autocorrelação – extrai a influência;
- Integrado (I): Aplicado à diferenciação, quando necessário
- Modelos médias móveis (MA): avalia erros entre períodos e extrai esses erros;
- Modelos autorregressivos e de médias móveis (ARMA)
- Modelos autorregressivos integrados e de médias móveis (ARIMA)


### Teste de Ljung-Box

Após estimar um modelo ARIMA, é crucial verificar se os resíduos do modelo apresentam as características de um ruído branco. Um teste comumente utilizado para avaliar a autocorrelação dos resíduos e, consequentemente, a adequação do modelo, é o teste de Ljung-Box.

Por que o teste de Ljung-Box é importante?

Ruído branco: Se os resíduos forem um ruído branco, significa que eles são independentes e identicamente distribuídos, ou seja, não há nenhuma informação relevante nos resíduos que não tenha sido capturada pelo modelo.
Autocorrelação: Se houver autocorrelação nos resíduos, isso indica que o modelo não capturou todas as dependências presentes nos dados, e portanto, o modelo não é adequado.
Como o teste de Ljung-Box funciona?

O teste de Ljung-Box verifica se a autocorrelação dos resíduos é significativamente diferente de zero em um conjunto de defasagens. A hipótese nula do teste é de que não há autocorrelação nos resíduos até determinada defasagem. Se o valor-p do teste for menor que o nível de significância escolhido (por exemplo, 5%), rejeita-se a hipótese nula, indicando que há evidências de autocorrelação nos resíduos.

Outros testes para verificar a adequação do modelo ARIMA:

Teste de Durbin-Watson: Embora menos poderoso que o teste de Ljung-Box, o teste de Durbin-Watson também é utilizado para verificar a autocorrelação de primeira ordem nos resíduos.
Análise gráfica dos resíduos: Gráficos como o gráfico de autocorrelação (ACF) e autocorrelação parcial (PACF) dos resíduos podem fornecer informações visuais sobre a presença de autocorrelação.
Teste de normalidade: Os resíduos de um modelo ARIMA idealmente seguem uma distribuição normal. Testes de normalidade, como o teste de Shapiro-Wilk, podem ser utilizados para verificar essa suposição.
Em resumo:

O teste de Ljung-Box é uma ferramenta fundamental na avaliação da adequação de um modelo ARIMA. Ao verificar a autocorrelação dos resíduos, ele ajuda a determinar se o modelo captura adequadamente a estrutura da série temporal.

#### Escolha dos Modelos

- Critério de AIC – Critério de Informação de Akaike
- O AIC estima a quantidade relativa de informações perdidas por um determinado modelo: quanto menos informações um modelo perde, maior a qualidade desse modelo e menor a pontuação AIC.
- Critério de BIC – Critério de Informação Bayesiano 
- BIC mais baixoimplicaem melhor ajuste.


**Critério de Informação de Akaike (AIC)**: O AIC é uma métrica utilizada para comparar e selecionar modelos estatísticos. Ele busca encontrar um equilíbrio entre a complexidade do modelo e sua capacidade de ajustar os dados.
Informações perdidas: Quanto menor a quantidade de informação perdida por um modelo, melhor ele se ajusta aos dados. O AIC penaliza modelos mais complexos, evitando o overfitting (ajuste excessivo).
Menor AIC: Um valor menor de AIC indica que o modelo é mais parcimonioso (simples) e explica os dados de forma mais eficiente.

Tanto o AIC quanto o BIC são critérios amplamente utilizados para seleção de modelos.  BIC significa Critério de Informação Bayesiano e é diferente do AIC. Embora ambos busquem a mesma finalidade (seleção de modelos), possuem formulações e penalidades distintas.


### Teste de Estacionariedade

[...] um processo estocástico é estacionário se suas média e variância forem constantes ao longo do tempo e o valor da covariância entre dois períodos de tempo depender apenas da distância ou defasagem entre os dois períodos, e não do período de tempo efetivo em que a covariância é calculada (ENDERS, 2003).

#### Teste de Dickey-Fuller (ADF):

Teste feito porque não se sabe se a série temporal possui mais de uma raiz unitária, pois o número de termos de diferenças defasadas é, muitas vezes, determinado empiricamente.

- Hipótese nula: A série possui raiz unitária (ou seja, é não estacionária).
- Hipótese alternativa: A série é estacionária (sem raiz unitária). 
- Objetivo: O teste ADF busca evidências para rejeitar a hipótese nula de raiz unitária, indicando que a série é estacionária.

#### Teste KPSS:

- Hipótese nula: A série é estacionária em torno de uma tendência determinística ou em torno de uma média.
- Hipótese alternativa: A série é não estacionária.
- Objetivo: O teste KPSS busca evidências para rejeitar a hipótese nula de estacionariedade, indicando que a série é não estacionária.

#### Teste de Phillips-Perron (PP):

- Hipótese nula: A série possui raiz unitária (ou seja, é não estacionária).
- Hipótese alternativa: A série é estacionária.
- Objetivo: Similar ao teste ADF, o teste PP busca evidências para rejeitar a hipótese nula de raiz unitária, indicando que a série é estacionária.


## Para saber mais

- Moderem Time Series Forecasting with Python
- Forecasting: Principles and Practice, de Rob J Hyndman e George Athanasopoulos
- Introdução à Séries Temporais
- Analise de Séries Temporais
