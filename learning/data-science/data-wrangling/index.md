# Data Wrangling

Processo de transformação de dados brutos em um formato mais adequado para análise. Etapa de preparação, organização e manipulação de dados para análise. Ocorre antes da análise exploratória de dados, criação de modelos preditivos, gráficos, etc.

Quanto melhor o data wrangling, melhores serão os dados e maior tende a ser a qualidade da análise.

Não é uma atividade padronizada, cada projeto pode ter suas particularidades.

## Etapas

1. **Coleta e Importação de Dados**: Obtenção de dados de diversas fontes, como arquivos, bancos de dados, APIs, etc.
2. **Junção de Dados**: Combinar dados de diferentes fontes.
3. **Transformação de Dados**: Limpeza, organização e estruturação dos dados.

### 6 passos do Data Wrangling

1. **Descoberta de Dados**: Entendimento do problema e dos dados disponíveis.
2. **Estruturação de Dados**: Organização dos dados em um formato adequado para análise.
3. **Limpeza de Dados**: Tratamento de valores ausentes, duplicados, outliers, etc.
4. **Enriquecimento de Dados**: Adição de informações úteis aos dados.
5. **Validação de Dados**: Verificação da qualidade dos dados.
6. **Publicação de Dados**: Disponibilização dos dados para análise.
 

## Funções do python

- .assign( ) - Adiciona uma nova coluna ao DataFrame mantendo as colunas existentes. Você pode especificar o nome da nova coluna e os valores que ela deve conter.
- .drop( ) - Remove linhas ou colunas do DataFrame. Você pode especificar se deseja remover linhas ou colunas usando os parâmetros axis=0 para linhas e axis=1 para colunas.
- .drop_duplicates( ) - Remove linhas duplicadas do DataFrame. Por padrão, mantém a primeira ocorrência de cada linha duplicada e remove as subsequentes, mas isso pode ser configurado com o parâmetro keep.
- .head( ) - Retorna as primeiras n linhas do DataFrame. O valor padrão de n é 5.
- .tail( ) - Retorna as últimas n linhas do DataFrame. O valor padrão de n é 5.
- .info( ) - Exibe um resumo conciso do DataFrame, incluindo o índice, tipo de dados e memória utilizada.
- .describe( ) - Gera estatísticas descritivas que resumem a tendência central, dispersão e forma da distribuição de um conjunto de dados, excluindo valores NaN.
.groupby( ) - Agrupa os dados usando um ou mais chaves e aplica uma função agregada a cada grupo.
- .merge( ) - Mescla dois DataFrames em um único DataFrame, combinando colunas comuns ou índices.
- .concat( ) - Concatena dois ou mais DataFrames ao longo de um eixo especificado (linhas ou colunas).
- .pivot_table( ) - Cria uma tabela dinâmica que resume os dados de um DataFrame, permitindo a agregação de valores.
- .melt( ) - Converte um DataFrame de formato largo para formato longo, empilhando colunas em uma única coluna.
- .fillna( ) - Substitui valores NaN por um valor especificado.
- .isnull( ) - Retorna um DataFrame do mesmo tamanho, indicando com valores booleanos se os valores são NaN.
- .notnull( ) - Retorna um DataFrame do mesmo tamanho, indicando com valores booleanos se os valores não são NaN.
- .apply( ) - Aplica uma função ao longo de um eixo do DataFrame (linhas ou colunas).
- .map( ) - Mapeia os valores de uma Série de acordo com uma função ou um dicionário de substituições.
- .astype( ) - Converte os dados de uma coluna para um tipo específico.
- .sort_values( ) - Ordena os dados do DataFrame por uma ou mais colunas.
- .value_counts( ) - Retorna uma Série contendo contagens de valores únicos.

### Estatísticas

- **contagem**: `dados_tempo['tempo'].count()`
- **média**: `dados_tempo['tempo'].mean()`
- **mediana**: `dados_tempo['tempo'].median()`
- **mínimo**: `dados_tempo['tempo'].min()`
- **máximo**: `dados_tempo['tempo'].max()`
- **desvio padrão**: `dados_tempo['tempo'].std()`
- **variância**: `dados_tempo['tempo'].var()`
- **quartis**: `dados_tempo['tempo'].quantile([0.25, 0.75])`
- **soma**: `dados_tempo['tempo'].sum()`
- **correlação**: `dados_tempo[['tempo','distancia','semaforos']].corr()`
- **tabela de frequência**: `dados_tempo['tempo'].value_counts()`
- **tabela de frequência relativa**: `dados_tempo['tempo'].value_counts(normalize=True)`
- **tabela de frequencias cruzadas**: `pd.crosstab(dados_tempo['tempo'], dados_tempo['distancia'])`
- **valores unicos**: `dados_tempo['tempo'].unique()`
- **criação de um banco de dados agrupado**: `ndf = dados_tempo.groupby('tempo')`
- **filtro**: `dados_tempo[dados_tempo['tempo'] > 10]`
- **query**: `dados_tempo.query('tempo > 10')`
