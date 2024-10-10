# Deployment de modelos

## Revisando o processo de minireção de dados

```mermaid
graph LR;
    A[Entendimento do negocio] --> B[Entedimento dos dados]
    B --> A
    B --> C[Preparaçao dos dados]
    C --> D[Modelagem]
    D --> C
    D --> E[Avaliação]
    E --> A
    E --> F[Implantação]
```
Enquanto não implantamos o modelo, podemos fazer tunning do modelo, reavaliar os dados, etc. 

## Ciclo de vida de modelos
- Coleta e preparação de dados
- Treinamento e validação
- Deploy
- Monitoramento contínuo
- Atualização e re-treinamento
- Depreciação de modelos desatualizados

## Desafios nos deployments de modelos
- Data drift
- Diferença entre dev e prod
- Monitoramento de performance
- Gereneciamento de versões
- Implementação e funcionamento do MLOps

## MLOPS - Machine Learning Operations
Combina práticas de DevOps com Machine Learning para melhorar a qualidade e a velocidade de entrega de modelos de Machine Learning.

Automatiza o ciclo de vida de modelos de Machine Learning, incluindo treinamento, avaliação, deploy e monitoramento. Utiliza ferramentas e práticas de DevOps para facilitar a dinâmica entre cientistas de dados, engenheiros de software e operações de TI.

## Ferramentas de MLOps
- Kubeflow
- MLflow
- Weight & Biases
- Neptune.ai
- Seldon
- Polyaxon

### MLflow

- Mlflow Tracking: Gerencia experimentos, resultados e métricas
- Mlflow Projects: Empacota e executa código em diferentes ambientes
- Mlflow Models: Empacota modelos em formato padrão para deploy
- Mlflow Registry: Armazena, gerencia e controla versões de modelos

#### Benefícios do MLflow
- Rastreabilidade e controle de versão
- Integração com multiplos frameworks e linguagens
- Simplificação de deploy e monitoramento
- Facilita o retreiamento e atualização de modelos

#### Arquitetura do MLflow

![MLflow](https://mlflow.org/docs/latest/_images/tracking-setup-overview.png)


Deploy de modelos

![Deploy](https://mlflow.org/docs/latest/_images/mlflow-deployment-overview.png)

Uma das formas de expor os modelos é através de APIs REST.


#### Rodando o MLflow

```bash
python -m venv .venv
source .venv/bin/activate
# Instalando o MLflow
pip install mlflow

# Rodando o MLflow
mlflow ui
# Acessar http://localhost:5000
```

Um experimento é uma execução de um código de treinamento de um modelo. Cada experimento tem uma ID única e pode ter várias execuções (runs).

No Mlflow input é o parâmetro que você passa para o seu modelo, e output é metrica ou resultado do modelo.

Publicar runs, criar modelo e gerencias versões, consumido modelos via API.

```python
loaded_model = mlflow.statsmodels.load_model(
    "models:/<modelo_name>/<environment>"
)
```

Servindo modelos com MLflow

```bash
export MLFLOW_TRACKING_URI=http://localhost:5000
mlflow models serve -m models:/<modelo_name>/<environment> -p 5299
curl http://localhost:5200/invocations -H "Content-Type: application/json" -d '{"dataframe_records": [{"distancia": 20}]}'
#{'predictions': [{'0': 34.25675675675675}]}

```

## Para saber mais

- https://mlflow.org/docs/latest/introduction/index.html
- TREVEIL, M. et al. Introduction to MLOps. O'Reilly Media, 2020.
- DATABRICKS, The Big Book of MLOps. Databricks, 2022.

