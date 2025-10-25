# AI

Inteligência Artificial Generativa (IA Generativa) é um tipo de IA focado em criar novos dados (texto, imagens, áudio, código, etc.) que se parecem com os dados nos quais o modelo foi treinado. Em vez de apenas classificar ou analisar dados existentes, ela gera conteúdo original.

Large Language Models (LLMs), ou Modelos de Linguagem Grandes, são uma subcategoria crucial da IA Generativa, especificamente projetada para lidar com a linguagem natural (texto).

Deep Learning é um subconjunto do Machine Learning.

## Machine Learning (Aprendizado de Máquina)

O ML clássico usa algoritmos que aprendem padrões em dados para fazer previsões ou decisões, mas a extração de características (o que é relevante nos dados) geralmente requer intervenção humana (engenharia de recursos). Tende a funcionar bem com dados estruturados ou com conjuntos de dados menores.


| Arquitetura/Algoritmo | Foco Principal | Exemplo de Uso |
|---|---|---|
| Regressão Linear/Logística | Prever um valor contínuo ou classificar em duas categorias. | Previsão de preços de casas (linear) ou detecção de spam (logística). |
| Árvores de Decisão/Random Forest | Usar uma estrutura de árvore para tomar decisões (classificação ou regressão). | Análise de risco de crédito, diagnóstico médico. |
| Máquinas de Vetores de Suporte (SVM) | Encontrar o melhor hiperplano que separa classes de dados. | Classificação de texto, reconhecimento de escrita. |
| K-Means (Clustering) | Agrupar dados não rotulados em clusters (aprendizado não supervisionado). | Segmentação de clientes, compressão de imagens. |


## Deep Learning (Aprendizado Profundo)

O DL usa Redes Neurais Artificiais (ANNs) com múltiplas camadas ocultas ("profundas"). Sua principal vantagem é a capacidade de realizar a extração automática de características (características complexas são aprendidas diretamente a partir dos dados brutos), eliminando a necessidade de engenharia de recursos manual na maioria dos casos. É ideal para lidar com dados não estruturados e muito grandes (imagens, áudio, texto).

| Arquitetura/Algoritmo | Foco Principal | Exemplo de Uso |
|---|---|---|
| Redes Neurais Convolucionais (CNNs) | Processar dados com estrutura de grade (principalmente imagens). | Reconhecimento facial, carros autônomos, visão computacional. |
| Redes Neurais Recorrentes (RNNs) | Lidar com dados sequenciais, mantendo uma "memória" do passado. | Tradução automática, reconhecimento de fala. |
| LSTM (Long Short-Term Memory) | Uma variação de RNN que resolve o problema do "gradiente de desaparecimento", lembrando dependências de longo prazo. | Previsão de séries temporais, Processamento de Linguagem Natural (NLP). |
| Transformers | Arquitetura moderna baseada em mecanismo de atenção, capaz de processar sequências em paralelo e lidar com dependências de longo alcance. | LLMs (Modelos de Linguagem Grandes, como GPT), tradução avançada. |
| GANs (Redes Adversariais Generativas) | Usam duas redes (Gerador e Discriminador) competindo para gerar novos dados. | Criação de imagens e vídeos realistas (IA Generativa). |

## AI Trustworthy

A confiança em IA é fundamental para a adoção e o uso responsável da tecnologia. Isso envolve garantir que os modelos de IA sejam transparentes, justos e seguros. Algumas práticas recomendadas para promover a confiança em IA incluem:

- **Explicabilidade:** Desenvolver modelos que possam fornecer explicações claras sobre suas decisões e previsões.
- **Justiça:** Garantir que os modelos não perpetuem preconceitos ou discriminação, realizando auditorias regulares e ajustando os dados de treinamento conforme necessário.
- **Segurança:** Proteger os modelos contra ataques adversariais e garantir a privacidade dos dados dos usuários.
- **Responsabilidade:** Estabelecer diretrizes claras sobre a responsabilidade pelo uso da IA e suas consequências.


## Aprendizado Supervisionado vs. Não Supervisionado

- **Aprendizado Supervisionado:** Envolve treinar modelos com dados rotulados, onde cada entrada tem uma saída correspondente conhecida. O objetivo é aprender a mapear entradas para saídas. Exemplos incluem classificação (e.g., detecção de spam) e regressão (e.g., previsão de preços).
- **Aprendizado Não Supervisionado:** Envolve treinar modelos com dados não rotulados, onde o objetivo é encontrar padrões ou estruturas subjacentes nos dados. Exemplos incluem clustering (e.g., segmentação de clientes) e redução de dimensionalidade (e.g., compressão de dados).

Non-Parametric Models são modelos que não assumem uma forma fixa para a função que está sendo aprendida. Eles podem se adaptar à complexidade dos dados, permitindo que o modelo cresça em complexidade com o aumento dos dados de treinamento. Exemplos incluem K-Nearest Neighbors (KNN) e Árvores de Decisão.

## Notes

Regression is the type of Machine Learning algorithm used when we want to predict continuous numerical values, such as the resale price of a residential property. In regression tasks, the goal is to learn a mapping between input features (e.g., square footage, number of bedrooms, location) and a continuous target variable (e.g., price). Linear Regression is most employed for this purpose.

Logistic Regression is a binary classification algorithm commonly used in Machine Learning to predict binary outcomes, such as whether a loan will be defaulted or not. The key idea behind Logistic Regression is to model the probability of an event occurring as a function of input features. The output of this model is transformed using the sigmoidal (also known as logistic) function. The sigmoidal function, often represented as the sigmoid function, has an S-shaped curve that maps any input value to an output value between 0 and 1.

Machine Translation involves translating a sentence or a sequence of text from one language to another, which is essentially a sequence-to-sequence problem. In Many-to-Many RNN architecture, the network takes a sequence of inputs and produces a sequence of outputs. In the context of machine translation, this means it can take a sequence of words or tokens in one language as input and generate a corresponding sequence of words or tokens in another language as output.

Fine-tuning of Large Language Models (LLMs) is primarily performed to adapt the model to specific tasks or domains. If your application doesn't require task-specific adaptation, then fine-tuning may not be necessary. Fine-tuning can be used to optimize the efficiency and resource utilization of LLMs, help adapt the model to domain-specific vocabulary, and address bias-related issues.

Sequence models are indeed well-suited for tasks involving sequentially ordered data points or events, such as time series analysis, natural language processing, speech recognition, and language translation. However, for image classification and object recognition, traditional machine learning models and convolutional neural networks (CNNs) are more commonly used.

Model Deployments in OCI Data Science enable you to deploy your machine learning models as HTTP endpoints, making them accessible for real-time predictions and inferences. You can easily deploy, manage, and scale these models on fully managed infrastructure. Model Deployments are a key component for operationalizing your machine learning models and integrating them into your applications or services.

Dedicated AI Clusters provide GPU-based compute resources required to fine-tune a pre-trained model for specific tasks like customer support.

You can organize and extract text and structure from image-based documents and PDFs by calling the Document AI pretrained models with a single request in OCI Vision.

OCI Language Service is a natural language processing (NLP) service. This service allows you to analyze text data and determine the sentiment or emotional tone expressed in the text. It identifies the sentiment of the text - and not just one sentiment for the entire block of text, but the different sentiments for different aspects.

OCI AI Infrastructure includes NVIDIA GPUs, OCI Storage, and RDMA Networking for high-performance AI and ML workloads. However, OCI Vault is primarily used for securing and managing cryptographic keys and secrets, not AI infrastructure.

Object detection is implemented using Deep Learning. Hence the answer is Deep Learning.

The GB200 GPU is a next-generation Grace Blackwell GPU designed for exascale AI and HPC workloads, making it more suitable for massive-scale AI training rather than standard large-scale AI workloads.

T-Few fine-tuning adds new layers to the pre-trained model and modifies only a fraction of the model s weights, significantly reducing the time and cost compared to full fine-tuning.

To extract specific values from receipts, key-value extraction is the best feature, as it identifies and extracts predefined fields like merchant name and transaction date.

To retain the words but mark them, tagging is the correct choice. This method leaves the words in place while adding labels to indicate profanity.

Detecting pedestrians and making lane changes is similar to a human behaviour. Hence the answer is Artificial Intelligence.

For AI to be trustworthy, it must comply with laws and regulations (lawful), adhere to ethical values (ethical), and be reliable both technically and socially (robust).

Predicting a next note in music needs context of prior notes. For this RNN is well suited.

Detecting spam is a classification problem. Hence Machine Learning can be used for Supervised Machine Learning.

Recommendations are given based on the user's past choices or similar user or product choices. Hence it is an example of a Supervised Machine Learning.

Loss function checks what is the difference between actual value and predicted value.

Spam detection is a supervised machine learning problem and NOT a unsupervised learning example.

K-Nearest Neighbors (KNN) is considered a non-parametric algorithm: Unlike parametric models (e.g., linear regression, neural networks), KNN doesn't have any parameters that need to be learned from the data. The only parameter to tune is the number of nearest neighbors (K).

Inference refers to predicting an outcome given an input using a trained model.