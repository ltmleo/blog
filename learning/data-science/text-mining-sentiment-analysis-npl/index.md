# Text Mining, Sentiment Analysis e NLP

- Espera-se que 90% dos dados sejam não estruturados nos próximos 10 anos.
- A análise de sentimentos é uma técnica de mineração de texto que envolve o uso de algoritmos de aprendizado de máquina para identificar e extrair informações subjetivas de um texto. O objetivo é determinar a opinião ou sentimento expressos em um texto, como positivo, negativo ou neutro.

## Desafios

### Ambiguidade

- Manga, banco, planta...: Podem ser interpretados de diferentes maneiras dependendo do contexto.

### Sarcasmo e Ironia

- O sarcasmo e a ironia são formas de expressão que podem ser difíceis de detectar em textos, especialmente em análises automatizadas. Por exemplo, a frase "Adorei esperar horas na fila" pode ser interpretada como uma opinião positiva, mas na verdade expressa descontentamento.

### Diversidade Linguística

- A diversidade linguística é um desafio importante na análise de sentimentos, pois diferentes idiomas e dialetos podem ter estruturas gramaticais e vocabulários distintos. Isso pode dificultar a aplicação de algoritmos de aprendizado de máquina treinados em um idioma específico para outros idiomas.

## Polaridade

- Polaridade é a classificação de um texto em relação a uma escala de sentimentos, que pode variar de negativa a positiva. A polaridade pode ser medida em uma escala contínua ou discreta, dependendo do modelo utilizado.
- Varia de -1 a 1, onde -1 representa uma opinião negativa, 0 representa uma opinião neutra e 1 representa uma opinião positiva.

## Subjetividade

- Subjetividade refere-se à presença de opiniões, sentimentos ou emoções em um texto. Textos subjetivos expressam opiniões pessoais, enquanto textos objetivos apresentam informações factuais.
- A subjetividade pode ser medida em uma escala contínua ou discreta, dependendo do modelo utilizado.
- Varia de 0 a 1, onde 0 representa um texto objetivo (baseado em fatos) e 1 representa um texto subjetivo (baseado em opinião).

## Polarity_Scores

- O Polarity_Scores é uma função que calcula a polaridade de um texto, retornando um dicionário com as pontuações de polaridade positiva, negativa e neutra. A função utiliza o modelo VADER (Valence Aware Dictionary and sEntiment Reasoner) para calcular as pontuações de polaridade.

- **Neg**: Pontuação de polaridade negativa.
- **Neu**: Pontuação de polaridade neutra.
- **Pos**: Pontuação de polaridade positiva.
- **Compound**: Pontuação de polaridade composta, que é uma combinação das pontuações de polaridade positiva, negativa e neutra. A pontuação composta varia de -1 a 1, onde -1 representa uma opinião negativa, 0 representa uma opinião neutra e 1 representa uma opinião positiva (pontuação geral do sentimento).

:::danger
O VADER for treinado para analisar textos em inglês, portanto, não é adequado para textos em português.
:::


## TF-IDF 

- TF-IDF (Term Frequency-Inverse Document Frequency) é uma técnica de representação de texto que combina a frequência de termos em um documento com a frequência inversa de documentos. O TF-IDF é amplamente utilizado em tarefas de recuperação de informações e mineração de texto, pois ajuda a identificar palavras-chave e a medir a importância de termos em um conjunto de documentos.


## Para saber mais

- https://streamlit.io/
- https://scikit-learn.org/stable/
- https://github.com/guilhermeonrails/depoimentos-csv