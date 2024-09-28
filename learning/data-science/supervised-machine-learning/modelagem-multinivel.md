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


* Y = efeito fixo + efeito aleatório + erro

* Modelos multinível naturalmente consideram heterocedasticidade naturalmente. Diagnostico da heterocedasticidade (cone se abrindo) é omissão de variáveis relevantes, no caso de GLMM considera naturalmente pois considera efeitos aleatórios de inclinação e intercepto.

* `var(u_0j)`: Variância dos efeitos aleatórios de intercepto
* `var(u_ij)`: Variância dos efeitos aleatórios de inclinação

* `var(u_0j) ~= 0 e var(u_ij) ~= 0`: OLS(GLM)
* `var(u_0j) ~= 0 e var(u_ij) != 0`: Interceptos aleatórios
* `var(u_0j) != 0 e var(u_ij) ~= 0`: Inclinações aleatórias
* `var(u_0j) != 0 e var(u_ij) != 0`: Interceptos e inclinações aleatórias

![Efeitos](https://bookdown.org/steve_midway/DAR/images/07_models.png)

* OLS é um caso especial de GLMM, onde não há efeitos aleatórios.
* Dummização permite eventos aleatórios de intercepto.

* **Box-Cox Transformation** - Transformação de Box-Cox é uma técnica que pode ser usada para estabilizar a variância e tornar os resíduos mais próximos da normalidade. As vezes nem isso é suficiente, e é necessário usar modelos multinível.

Se a variância dos termos aleatórios forem estadisticamente diferentes de zero, então o modelo multinível é mais apropriado.

* Não existe procedimento stepwise para estimação de modelagem multinível, pois a retirada de uma variável pode afetar o modelo como um todo. Utiliza-se a estratégia de step-up.

* **ICC**: Intraclass Correlation Coefficient - Mede a proporção da variância total que é devida a variação entre os grupos. `ICC = Variância entre os grupos / Variância total`. Mostra o quanto da variância é explicada pelo efeito do grupo.

### Step-Up Strategy
1. Primeiro roda-se o **modelo nulo** (modelo sem variação no x, so tem efeito aleatório de intercepto), Se a variância do efeito aleatório de intercepto nao for estaticamente aleatório, nao se justifica a modelagem multinível, é OLS.
* nível 1: `desempenho_ij = β_0j + e_ij`
* nível 2: `β_0j = γ_00 + u_0j` (γ_00 grand mean ou intercepto - componente de efeito fixo, u_0j efeito aleatório de intercepto)
* substituindo: `desempenho_ij = γ_00 + u_0j + e_ij` (se não tiver variação de u_0j, não se justifica a modelagem multinível)

1. Modelo com intercepto e inclinação aleatórios.
2. Modelo final



## Desafios de Modelos Multinível
- Interações profundas e capacidade de processamento
- Métodos de estimação dos parâmetros
- Clusterização da amostra


### Para saber mais
- http://mfviz.com/hierarchical-models/
- https://www.youtube.com/watch?v=QCqF-2E86r0
