# Técnicas de Prompting

- **Prompt Engineering**: A arte de criar prompts eficazes para obter respostas desejadas de modelos de linguagem.

- **Instrução**: Fornecer ao modelo uma tarefa específica a ser realizada, como responder a uma pergunta ou gerar um texto. Tarefa ou instrução específica.
- **Contexto**: Fornecer informações adicionais relevantes para a tarefa, ajudando o modelo a entender melhor o que é esperado. Direcionar o modelo.
- **Dados de entrada**: Qual a pergunta ou a entrada que você quer respondida.
- **Indicador/Formato de saída**: Especificar o formato ou estilo da resposta desejada, como um resumo, uma lista ou um parágrafo. (Se está usando lanchain da para usar structured output)

## Zero-shot Prompting

Técnica onde o modelo é solicitado a realizar uma tarefa sem qualquer exemplo ou contexto adicional. O modelo deve inferir a tarefa apenas a partir do prompt fornecido.

```plaintext
Prompt: "Classifique o seguinte texto como positivo ou negativo: 'Eu amo aprender sobre inteligência artificial!'"

Resposta: "Positivo"
```

## Few-shot Prompting

Técnica onde o modelo é fornecido com alguns exemplos de entrada e saída para ajudar a entender a tarefa antes de gerar uma resposta para uma nova entrada. `customizar a resposta`

```plaintext
Prompt: 
Classifique o seguinte texto como positivo ou negativo: 
Eu amo aprender sobre inteligência artificial!: 👍
Eu odeio esperar na fila: 👎
---
Eu adoro viajar!

Resposta: "👍"
```

## Chain-of-Thought (CoT)

Técnica que incentiva o modelo a pensar passo a passo, explicando seu raciocínio antes de chegar a uma conclusão. Isso pode ajudar a melhorar a precisão em tarefas complexas. `forçar o modelo a pensar em voz alta`

### Few-shot CoT

```plaintext
Prompt:
P: Quantas letras r exitem na palavra "carro"?
R: Conte quantas letras são iguais a r: C não é r, a não é r, r é r, r é r, o não é r. Então existem 2 letras r na palavra carro.
---
P: Quantas letras r existem na palavra "strawberry"?
Respota: Conte quantas letras são iguais a r: s não é r, t não é r, r é r, a não é r, w não é r, b não é r, e não é r, r é r, r é r, y não é r. Então existem 3 letras r na palavra strawberry.
```

### Zero-shot CoT

O Zero-shot CoT é um método de engenharia de prompts que melhora o raciocínio de um modelo de IA ao adicionar frases como `Vamos pensar passo a passo` à pergunta, sem precisar de exemplos prévios. É eficaz para tarefas como raciocínio aritmético e de bom senso, embora possa não ser tão robusto quanto métodos com exemplos em problemas complexos. 

```plaintext
Prompt: "Quantas letras r existem na palavra 'strawberry'? Vamos pensar passo a passo."
Resposta: "Conte quantas letras são iguais a r: s não é r, t não é r, r é r, a não é r, w não é r, b não é r, e não é r, r é r, r é r, y não é r. Então existem 3 letras r na palavra strawberry."
```
