# Portfólio de IA da OCI

O **OCI AI Portfolio** (Portfólio de IA da Oracle Cloud Infrastructure) é uma oferta completa que abrange toda a pilha de tecnologia, desde a infraestrutura de alto desempenho até os serviços de aplicações de IA prontas para uso.

Seu objetivo é permitir que as empresas adotem a Inteligência Artificial, especialmente a **IA Generativa**, em seus dados e fluxos de trabalho.

O portfólio pode ser resumido em quatro pilares:

### 1. Infraestrutura de IA (AI Infrastructure)
* **Poder de Computação:** Fornece recursos de computação de alto desempenho, incluindo **GPUs NVIDIA** (e outros hardwares especializados, como AMD Instinct MI300X) em clusters RDMA, essenciais para o treinamento rápido de grandes modelos de Machine Learning (ML) e Deep Learning.

### 2. Serviços de Machine Learning (ML Services)
* **OCI Data Science:** É a plataforma principal para cientistas de dados, oferecendo um ambiente completo e gerenciado para criar, treinar, implantar e gerenciar modelos de ML, incluindo notebooks JupyterLab e recursos de AutoML.
* **ML no Banco de Dados:** O **Oracle Autonomous Database** e o **HeatWave** incluem recursos de ML, permitindo que os clientes executem algoritmos e análise vetorial diretamente nos dados, sem a necessidade de movimentação (ex: *Select AI* com RAG).

### 3. Serviços de IA (AI Services)
São serviços pré-treinados e prontos para uso através de APIs, que permitem aos desenvolvedores adicionar rapidamente recursos de IA a aplicações sem a necessidade de experiência em ML. Incluem:
* **OCI Generative AI:** Serviço gerenciado que fornece acesso a Grandes Modelos de Linguagem (LLMs) de parceiros (como Cohere e Meta Llama) e da Oracle, permitindo **ajuste fino (*fine-tuning*)** com dados privados e a criação de agentes de IA.
* **Visão (Vision):** Para detecção de objetos, classificação de imagens e reconhecimento de texto (OCR).
* **Linguagem (Language):** Para tradução, análise de sentimento e extração de entidades em texto.
* **Fala (Speech):** Para transcrição de áudio para texto.
* **Document Understanding:** Para extração de dados e informações de documentos estruturados e não estruturados (ex: faturas).

### 4. IA em Aplicações (AI in Applications)
A Oracle integra recursos de IA diretamente em suas suítes de aplicativos de negócios (*SaaS*), como as **Oracle Fusion Applications**, para automatizar processos e fornecer *insights* a usuários corporativos sem a necessidade de codificação.

Em resumo, o **OCI AI Portfolio** oferece uma **pilha vertical completa** que atende desde o cientista de dados (com infraestrutura e Data Science) até o usuário final (com serviços prontos e IA embarcada em aplicações).

Os recursos do portfólio de IA da OCI vão muito além dos serviços básicos (Vision, Language, Speech) e da plataforma de Data Science. Eles incluem elementos fundamentais de infraestrutura, operações e integração de dados, que são cruciais para a IA em escala empresarial.

Aqui está um resumo desses componentes adicionais:

### 1. OCI AI Superclusters
Este é o ápice da infraestrutura de IA da Oracle, focado em alta performance e escala massiva.

* **O que é:** Combina dezenas de milhares de **GPUs NVIDIA** (incluindo as de última geração, como Blackwell) com redes de alta velocidade, *Remote Direct Memory Access* (RDMA) e armazenamento.
* **Propósito:** Projetado especificamente para o treinamento e a implantação de **Grandes Modelos de Linguagem (LLMs)** e **Modelos Multi-Modais (LMMs)** em escala *zettascale*.
* **Diferencial:** Permite que empresas e *startups* de IA treinem modelos complexos de forma mais rápida e econômica do que em infraestruturas tradicionais.

### 2. Oracle Database 23ai (e AI Vector Search)
O Oracle Database 23ai traz a IA diretamente para o ambiente de dados, eliminando a necessidade de mover grandes volumes de informações.

* **Integração de IA:** A letra "ai" significa que a IA é nativa do banco de dados.
* **AI Vector Search:** Um recurso crucial que adiciona o conceito de vetores (representações numéricas da semântica de dados) ao banco de dados.
    * **Uso:** Essencial para a arquitetura **RAG (Retrieval-Augmented Generation)**, permitindo que os LLMs busquem informações relevantes de dados privados e não estruturados dentro do banco de dados para gerar respostas mais precisas e contextuais.
* **Select AI:** Permite que os usuários gerem consultas **SQL** a partir de comandos em linguagem natural (texto), tornando a interação com o banco de dados mais acessível.

## 23ai Database and AI Vector Search

### Oracle Database 23ai - Resumo das Capacidades

O **Oracle Database 23ai** representa uma evolução revolucionária do banco de dados tradicional, integrando nativamente capacidades de Inteligência Artificial. O "ai" no nome simboliza que a IA não é um complemento, mas sim parte fundamental da arquitetura.

#### Principais Capacidades de IA:

**1. AI Vector Search**
- **Busca Semântica:** Permite consultas baseadas em significado, não apenas palavras-chave
- **Embeddings Nativos:** Armazena e indexa vetores de alta dimensionalidade diretamente no banco
- **Similarity Search:** Encontra conteúdo similar usando distâncias vetoriais (cosine, euclidean, dot product)
- **Uso Principal:** Base para arquiteturas RAG (Retrieval-Augmented Generation)

**2. Select AI**
- **SQL Natural:** Converte perguntas em linguagem natural para consultas SQL
- **Democratização:** Permite que usuários não-técnicos consultem dados complexos
- **Integração LLM:** Funciona com modelos como GPT, Claude, e LLMs da Oracle
- **Exemplo:** "Mostre as vendas do último trimestre por região" → SQL automático

**3. ML in Database**
- **Algoritmos Integrados:** +30 algoritmos de ML executam diretamente no banco
- **Oracle ML4Py:** Interface Python para cientistas de dados
- **AutoML:** Seleção e otimização automática de modelos
- **In-Database Processing:** Elimina movimento de dados para análise

#### Arquitetura RAG Nativa:

```
Dados Empresariais → Embeddings → Vector Store (23ai) → LLM → Resposta Contextual
```

**Fluxo RAG Integrado:**
1. **Ingestão:** Documentos são convertidos em embeddings automaticamente
2. **Indexação:** Vetores são armazenados com índices otimizados
3. **Retrieval:** Busca semântica encontra contexto relevante
4. **Generation:** LLM usa o contexto para gerar respostas precisas

#### Vantagens Competitivas:

**Performance:**
- **Zero Data Movement:** IA executa onde os dados estão
- **Índices Vetoriais:** Busca em milhões de vetores em milissegundos
- **Paralelização:** Aproveita toda a infraestrutura de banco distribuído

**Segurança:**
- **Data Governance:** Controles de acesso aplicados aos vetores
- **Encryption:** Embeddings protegidos com criptografia nativa
- **Audit:** Rastreabilidade completa de acessos e operações

**Escalabilidade:**
- **Autonomous Database:** Gerenciamento automático de recursos
- **Exadata Integration:** Performance otimizada em hardware especializado
- **Multi-Cloud:** Disponível em OCI, AWS, Azure

#### Casos de Uso Principais:

| Caso de Uso | Descrição | Benefício |
|---|---|---|
| **Knowledge Management** | Busca inteligente em documentos corporativos | Encontra informações por contexto, não palavras |
| **Customer Support** | Chatbots com acesso a base de conhecimento | Respostas precisas usando dados reais |
| **Product Recommendations** | Sugestões baseadas em similaridade | Recommendations mais relevantes |
| **Fraud Detection** | Detecção de padrões suspeitos | Análise em tempo real de transações |
| **Content Discovery** | Busca semântica em catálogos | Melhor experiência de usuário |

#### Integração com Ecosystem OCI:

- **OCI Generative AI:** Acesso direto aos LLMs da Oracle
- **Data Science:** Notebooks podem acessar vetores diretamente
- **Analytics Cloud:** Visualizações inteligentes com AI Vector Search
- **Integration Cloud:** Conectores para ingestão automatizada de dados

O Oracle Database 23ai elimina a complexidade tradicional de implementar soluções de IA empresarial, oferecendo uma plataforma unificada onde dados, vetores e modelos coexistem de forma nativa e segura.

### Oracle Database 23ai e Modelos ONNX

O **Oracle Database 23ai** suporta a integração com modelos ONNX (Open Neural Network Exchange), permitindo que modelos de Machine Learning e Deep Learning sejam utilizados diretamente no banco de dados.

#### Relação com ONNX:

**1. Suporte Nativo a ONNX:**
- O 23ai pode importar e executar modelos ONNX diretamente, eliminando a necessidade de servidores externos para inferência.
- Modelos ONNX são armazenados e gerenciados no banco, garantindo segurança e escalabilidade.

**2. Inferência em Dados no Banco:**
- Modelos ONNX podem ser aplicados diretamente aos dados armazenados no banco, reduzindo a latência e eliminando a movimentação de dados.
- Exemplo: Aplicar um modelo de classificação de imagens ONNX a dados binários armazenados em tabelas.

**3. Compatibilidade com Frameworks Populares:**
- ONNX é compatível com frameworks como PyTorch, TensorFlow e Scikit-learn, permitindo que cientistas de dados treinem modelos em suas ferramentas preferidas e os implantem no 23ai.

**4. Integração com AI Vector Search:**
- Modelos ONNX podem ser usados para gerar embeddings vetoriais diretamente no banco, otimizando fluxos de trabalho baseados em busca semântica.

#### Benefícios da Integração:

| Benefício | Descrição |
|---|---|
| **Desempenho** | Inferência diretamente no banco, reduzindo latência. |
| **Segurança** | Modelos gerenciados com os mesmos controles de acesso dos dados. |
| **Escalabilidade** | Execução paralela de inferências em grandes volumes de dados. |
| **Simplificação** | Elimina a necessidade de arquiteturas externas para inferência. |

#### Casos de Uso:

- **Classificação de Dados:** Aplicar modelos ONNX para categorizar registros diretamente no banco.
- **Análise de Imagens:** Processar imagens armazenadas em tabelas usando modelos ONNX.
- **Geração de Embeddings:** Usar modelos ONNX para criar representações vetoriais de dados textuais ou visuais.

A integração com ONNX reforça o compromisso do Oracle Database 23ai em oferecer uma plataforma unificada para dados e IA, simplificando a operacionalização de modelos em escala empresarial.

## GPUs

### Modelo de GPUs da OCI

A Oracle Cloud Infrastructure oferece uma das infraestruturas de GPU mais robustas e diversificadas do mercado, com foco especial em workloads de IA e Machine Learning.

#### Modelos Disponíveis e Casos de Uso por Escala:

| Modelo GPU | Memória | Escala de Uso | Casos de Uso Principais |
|---|---|---|---|
| **NVIDIA V100** | 16GB/32GB | **Pequena/Média** | Treinamento inicial, inferência de modelos pequenos, pesquisa acadêmica |
| **NVIDIA A10** | 24GB | **Pequena/Média** | Inferência de modelos médios, desenvolvimento, prototipagem, fine-tuning de modelos pequenos |
| **NVIDIA A100** | 40GB/80GB | **Média/Grande** | Treinamento de modelos de tamanho médio, inferência de LLMs, pesquisa acadêmica |
| **NVIDIA H100** | 80GB | **Grande/Enterprise** | Treinamento de LLMs complexos, inferência em alta escala, IA Generativa enterprise |
| **NVIDIA L40S** | 48GB | **Média** | Workloads mistos (gráficos + IA), inferência de modelos visuais, renderização |
| **NVIDIA Blackwell B200** | 192GB | **Escala Massiva** | Treinamento de frontier models, superclusters, pesquisa avançada |
| **AMD Instinct MI300X** | 192GB | **Grande/Enterprise** | Alternativa ao NVIDIA para treinamento de LLMs, workloads de memória intensiva |
| **GB200 GPU** | 256GB | **Exascale** | Treinamento de modelos foundation em escala massiva, workloads de IA e HPC em exascale |

#### Configurações por Escala:

**Pequena Escala (Desenvolvimento/Prototipagem):**
- 1-4 GPUs A10 ou A100
- Ideal para: Desenvolvimento inicial, fine-tuning, inferência de modelos pequenos
- Shapes: VM.GPU3.1, VM.GPU3.2, VM.GPU3.4

**Média Escala (Produção/Pesquisa):**
- 4-16 GPUs A100 ou H100
- Ideal para: Treinamento de modelos médios, inferência em produção, experimentação
- Shapes: BM.GPU4.8, VM.GPU.A10.1, VM.GPU.A10.2

**Grande Escala (Enterprise/LLMs):**
- 16-128 GPUs H100 ou MI300X
- Ideal para: Treinamento de LLMs, inferência de alta capacidade, IA Generativa enterprise
- Shapes: BM.GPU.H100.8, BM.GPU.MI300X.8

**Escala Massiva (Superclusters):**
- 1000+ GPUs Blackwell ou H100
- Ideal para: Frontier models, pesquisa de ponta, treinamento de modelos foundation
- Configuração: OCI AI Superclusters customizados

#### Principais Características:

**Conectividade de Alto Desempenho:**
- **RDMA (Remote Direct Memory Access):** Comunicação ultra-baixa latência entre GPUs
- **NVLink e NVSwitch:** Interconexão direta entre GPUs NVIDIA
- **InfiniBand:** Rede de alta velocidade para clusters distribuídos

**Diferenciais:**
- **Preços Competitivos:** Até 50% mais econômico que outros provedores cloud
- **Disponibilidade Global:** GPUs disponíveis em múltiplas regiões
- **Escalabilidade:** De desenvolvimento individual a superclusters enterprise
- **Flexibilidade de Pricing:** Por demanda, reservado, ou modelos spot

**Casos de Uso Típicos:**
- Treinamento de LLMs (Large Language Models)
- Inferência em tempo real
- Processamento de imagens e vídeo
- Simulações científicas e pesquisa
- Fine-tuning de modelos pré-treinados


