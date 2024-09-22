# Modelos para Dados de Contagem

**lambda**: Valor previsto de ocorrências, taxa de eventos ou contagem de eventos para dada exposição. Numero de navios em um porto, conversão de clientes em um site, numero de vendas em um dia, numero de acidentes em uma rodovia, etc.


**Diferença distribuição Poisson ou Possion gamma**: superdispersão (calda longa) media não estatisticamente da variança -> distribuição Poisson, variança estatisticamente  superior a media, comportamento de superdispersão -> Poisson gamma (binomial negativa)

**teste de Cameron e Trivedi**: Teste para verificar se existe superdispersão nos dados de contagem (Calda Longa).

## Distribuição Binomial Negativa (Possion Gamma)

**theta**: parâmetro de forma da distribuição Poisson-Gama (binomial negativa)
**delta**: parâmetro de taxa de decaimento da distribuição Poisson-Gama

## Modelos inflacionados de zeros
Combinação entre um modelo para dados de contagem e um modelo para dados binários.

**Modelo Poisson inflacionado de zeros**: combinação de um modelo Poisson com um modelo de Bernoulli (modelo logístico)
**Modelo binomial negativo inflacionado de zeros**: combinação de um modelo binomial negativo com um modelo de Bernoulli (modelo logístico)

**teste de Vuong**: Teste para verificar se existe uma quantidade significativa de zeros inflacionados na variável dependente Y.

### ZIP (Zero Inflated Poisson):
Os modelos de ZIP apresentam duas componentes: uma componente binomial que modela a probabilidade de zero (chamados zeros estruturais) e uma componente Poisson que modela a contagem de eventos (zeros amostrais).

![ZIP Model.](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BUr0ooloOJ_fy7gHzSNbr8D6y7N5_s_NFA&s)

:::note
Não tem stepwise para ZIP mas tem para Logit. Quem sobrar será responsavel vai entrar no componenten x2, quem sobrar será se de fato responsavel por inflacionar os zeros.
:::

### ZINB (Zero Inflated Negative Binomial):
