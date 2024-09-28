---
sidebar_position: 3
tags: ['ml', 'dsa', 'python', 'learning', 'wip', classnotes]
---

# Modelagem Multinível

## GLMM - Generalized Linear Models Multilevel

- Modelos multinível
- Modelos hierárquicos
- HLM (Hierarchical Linear Models)
- Mixed Models
- GLLAMM (Generalized Linear Latent and Mixed Models)
- Nested Models (Modelos Aninhados)
- Modelos Contextuais
- RCM (Random Coefficient Models)

## Modelos Multinível

Modelos multinível são modelos estatísticos que permitem a análise de dados hierárquicos, ou seja, dados que possuem uma estrutura de aninhamento, como por exemplo, alunos em escolas, pacientes em hospitais, funcionários em empresas, etc.

![GLMM](https://i.ytimg.com/vi/QCqF-2E86r0/maxresdefault.jpg)

* Modelos multinível naturalmente consideram heterocedasticidade.
* Y = efeito fixo + efeito aleatório + erro

* OLS é um caso especial de GLMM, onde não há efeitos aleatórios.
* Dummização permite eventos aleatórios de intercepto.

-- Colocar grafico de efeito fixo e aleatório ---

Se a variância dos termos aleatórios forem estadisticamente diferentes de zero, então o modelo multinível é mais apropriado.

## Desafios de Modelos Multinível
- Interações profundas e capacidade de processamento
- Métodos de estimação dos parâmetros
- Clusterização da amostra


### Saber mais
- http://mfviz.com/hierarchical-models/
- https://www.youtube.com/watch?v=QCqF-2E86r0
- 