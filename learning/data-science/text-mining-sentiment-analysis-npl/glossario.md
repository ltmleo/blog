# Glossário


## Lemmatization

Se baseia em "vocabulário" (consultas em dicionários) e "análise morfológica" para reduzir uma palavra à sua base ou forma dicionarizada, conhecida como "lema". Ao contrário da lematização, que apenas remove prefixos ou sufixos, a lematização leva em consideração o "significado" e o "contexto" da palavra para produzir uma forma de raiz gramaticalmente correta. 

> Técnica que reduz a palavra à sua forma canônica.

## Stemming

As "regras heurísticas" são regras simples e predefinidas que orientam a remoção de prefixos e sufixos de palavras para reduzi-las à sua raiz ou forma radical. Essas regras não se preocupam se a raiz resultante é uma palavra válida ou se tem significado semântico. Em vez disso, concentram-se puramente em cortar partes da palavra para chegar a uma forma base.

> Técnica que reduz a palavra à sua forma canônica.


## Tokenização

A tokenização é o processo de dividir um texto em unidades menores, chamadas de tokens. Esses tokens podem ser palavras, frases ou até mesmo caracteres individuais, dependendo do nível de granularidade desejado. A tokenização é uma etapa fundamental na pré-processamento de texto, pois permite que os algoritmos de aprendizado de máquina e processamento de linguagem natural (NLP) analisem e manipulem o texto de maneira mais eficaz.

## Stopwords

As stopwords são palavras comuns em um idioma que geralmente são filtradas ou removidas durante o pré-processamento de texto. Essas palavras incluem artigos, preposições, pronomes e outras palavras que não carregam muito significado semântico. A remoção de stopwords é uma prática comum em tarefas de processamento de linguagem natural (NLP) e mineração de texto, pois ajuda a reduzir o ruído nos dados e a melhorar a eficiência dos algoritmos.

> Palavras que não agregam muito significado ao conteúdo em análises textuais, como "de", "e", "o".

## Bag of Words

O Bag of Words (BoW) é uma representação de texto que transforma um conjunto de documentos em uma matriz de características. Cada documento é representado como um vetor, onde cada elemento do vetor corresponde à contagem ou frequência de uma palavra específica no documento. O BoW ignora a ordem das palavras e a gramática, concentrando-se apenas na presença ou ausência de palavras em um documento.

> Representação de texto que transforma um conjunto de documentos em uma matriz de características.

> É um processo de divisão de um texto em unidades menores, como palavras ou frases.

##  NLP (Processamento de Linguagem Natural)

O Processamento de Linguagem Natural (NLP) é um campo da inteligência artificial que se concentra na interação entre computadores e humanos por meio da linguagem natural. O objetivo do NLP é permitir que os computadores compreendam, interpretem e gerem a linguagem humana de maneira significativa e útil. Isso envolve o uso de algoritmos e modelos estatísticos para analisar e processar grandes volumes de dados textuais, permitindo que os sistemas realizem tarefas como tradução automática, análise de sentimentos, resumo de texto e resposta a perguntas.

> Uma área da inteligência artificial que permite que máquinas compreendam e processem a linguagem humana.


## lowercasing

O lowercasing é o processo de converter todas as letras de um texto para minúsculas. Essa etapa é frequentemente realizada durante o pré-processamento de dados textuais, especialmente em tarefas de processamento de linguagem natural (NLP) e aprendizado de máquina. O objetivo do lowercasing é garantir que palavras semelhantes sejam tratadas da mesma forma, independentemente de sua capitalização original. Por exemplo, "Cachorro", "cachorro" e "CACHORRO" seriam considerados a mesma palavra após o lowercasing.

> Técnica comum de pré-processamento de texto usada para padronizar o texto e reduzir a complexidade do vocabulário.

## Text Mining

A mineração de texto é o processo de extrair informações úteis e significativas de grandes volumes de dados textuais. Isso envolve a aplicação de técnicas de processamento de linguagem natural (NLP), aprendizado de máquina e estatísticas para analisar, interpretar e transformar dados não estruturados em informações estruturadas. A mineração de texto é amplamente utilizada em diversas áreas, como análise de sentimentos, recuperação de informações, resumo automático, categorização de documentos e detecção de tópicos.

> Método que extrai padrões, insights e informações úteis a partir de grandes quantidades de texto.


## Bag of Words

O Bag of Words (BoW) é uma representação de texto que transforma um conjunto de documentos em uma matriz de características. Cada documento é representado como um vetor, onde cada elemento do vetor corresponde à contagem ou frequência de uma palavra específica no documento. O BoW ignora a ordem das palavras e a gramática, concentrando-se apenas na presença ou ausência de palavras em um documento.

> Representação de texto que transforma um conjunto de documentos em uma matriz de características.

|frase \ palavras|de|gostei|não|produto|ruim|
|---|---|---|---|---|---|
|0|0|0|1|0|0|
|1|0|1|0|0|0|
|2|0|0|1|0|0|

## Pipeline 

Um pipeline é uma sequência de etapas ou processos encadeados que transformam dados brutos em informações úteis. No contexto de processamento de linguagem natural (NLP) e aprendizado de máquina, um pipeline pode incluir etapas como pré-processamento de texto, extração de características, treinamento de modelos e avaliação. O uso de pipelines ajuda a organizar e automatizar o fluxo de trabalho, facilitando a implementação e a manutenção de projetos complexos.

## N-grams

Um N-gram é uma sequência de N itens (palavras, caracteres ou outros elementos) extraídos de um texto. Os N-grams são usados em processamento de linguagem natural (NLP) e aprendizado de máquina para capturar padrões e relações contextuais entre palavras. Eles podem ser unigrams (1 palavra), bigrams (2 palavras), trigrams (3 palavras) e assim por diante. O uso de N-grams ajuda a melhorar a compreensão do contexto e a qualidade das representações textuais.

Quanto maior o N, mais cotexto é capturado, mas também precisa de mais dados para manter bons resultados.

```plaintext
Frase: "Não recebi o produto"
Unigramas (n=1): ["Não", "recebi", "o", "produto"]
Bigramas (n=2): ["Não recebi", "recebi o", "o produto"]
Trigramas (n=3): ["Não recebi o", "recebi o produto"]
```


### Unigrams

> Quais palavras aparecem no texto.

Unigrams são N-grams que consistem em uma única palavra. Eles são a forma mais simples de N-grams e são frequentemente usados em tarefas de processamento de linguagem natural (NLP) para representar palavras individuais em um texto. Os unigrams capturam a frequência de palavras, mas não consideram o contexto ou a ordem das palavras.

### Bigrams

> Contexto (como as palavras aparecem juntas)

Bigrams são N-grams que consistem em duas palavras consecutivas. Eles são usados em processamento de linguagem natural (NLP) para capturar relações contextuais entre palavras adjacentes. Os bigrams ajudam a melhorar a compreensão do significado e do contexto de um texto, permitindo que os modelos considerem a coocorrência de palavras.

### Trigrams

> Identificar expressões comuns ou padrões de palavras em um texto.

Trigrams são N-grams que consistem em três palavras consecutivas. Eles são usados em processamento de linguagem natural (NLP) para capturar relações contextuais mais complexas entre palavras adjacentes. Os trigrams ajudam a melhorar a compreensão do significado e do contexto de um texto, permitindo que os modelos considerem a coocorrência de palavras em sequências mais longas.
