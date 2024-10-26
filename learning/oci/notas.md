# Notas

- O Oracle Roving Edge Infrastructure é um serviço que fornece um dispositivo portátil e robusto executando um subconjunto de serviços OCI, projetado para implantação em campo fora de um data center tradicional. Não é um serviço projetado especificamente para implantação multicloud. Por outro lado, serviços como o Oracle Database Service for Azure e o Oracle Interconnect for Azure são projetados para permitir que o Oracle Cloud Infrastructure interopere com o Azure, indicando uma abordagem multicloud. O Oracle MySQL HeatWave é um serviço de análise para o serviço MySQL Database que é executado na AWS, mas o gerenciamento de contas, o faturamento e a medição são feitos por meio do OCI.

- O dimensionamento automático em um pool de instâncias dentro do serviço OCI Compute provisiona e remove instâncias automaticamente com base em condições ou programações específicas. Ele não altera a forma da instância de computação, nem se limita apenas ao dimensionamento automático baseado em métricas ou em programações. Em vez disso, o dimensionamento automático pode ser conduzido por políticas baseadas em métricas e em programações, oferecendo uma solução de dimensionamento mais dinâmica e flexível.

- The OCI Compute service offers instances powered by various processor types, including AMD, Intel, and Ampere. However, Snapdragon, which is a processor type commonly used in mobile devices, is not available for OCI Compute.

- Uma URL de solicitação pré-autenticada é um recurso no serviço OCI Object Storage que fornece acesso temporário e seguro a um objeto específico. Ela permite que os usuários gerem uma URL exclusiva com um tempo de expiração predefinido, permitindo que usuários externos acessem o objeto sem exigir autenticação ou autorização por meio do OCI Identity and Access Management.

- O OCI Vault é composto de vários componentes, incluindo chaves mestras de criptografia, segredos e cofres. Um cofre no OCI é uma entidade lógica onde você pode gerenciar e armazenar centralmente suas chaves de criptografia e segredos. Um segredo é um recurso que ajuda a gerenciar credenciais necessárias para acessar recursos do OCI. Uma chave mestra de criptografia é uma chave que o OCI usa para criptografar as chaves de criptografia que você cria no cofre (elas são gerenciadas pelo cliente). O backup do banco de dados não é um componente do OCI Vault; é uma funcionalidade associada ao serviço do OCI Database.

- Um Gateway de Roteamento Dinâmico (DRG) fornece um caminho para o tráfego entre uma VCN e uma rede local ou outra VCN na mesma região ou em uma região diferente.

- Um Service Gateway no serviço de rede Oracle Cloud Infrastructure permite acesso a serviços Oracle dentro da mesma região sem que o tráfego passe pela internet pública. Isso fornece uma conexão mais segura e confiável para acessar serviços Oracle como Object Storage, Autonomous Database e outros.

- No serviço Oracle Cloud Infrastructure Block Volume, o Online Resizing permite que você aumente o tamanho de um volume de bloco sem qualquer tempo de inatividade. Esse recurso permite que você dimensione a capacidade de armazenamento em tempo real para acomodar as crescentes necessidades de dados ou requisitos de aplicativos, garantindo disponibilidade e desempenho contínuos.
  

- A principal diferença entre Security Lists e Network Security Groups no Oracle Cloud Infrastructure é que Security Lists se aplicam a sub-redes, enquanto Network Security Groups se aplicam a VNICs de instâncias individuais. Isso permite um controle mais granular do tráfego de entrada e saída de instâncias.

- O Oracle Cloud Infrastructure Autonomous Database suporta dois tipos de cargas de trabalho: Transaction Processing (ATP) e Data Warehousing (ADW). O Transaction Processing é otimizado para cargas de trabalho de processamento de transações on-line (OLTP) de alto desempenho, enquanto o Data Warehousing é projetado para cargas de trabalho de processamento analítico de alto desempenho (OLAP).

- Live Migration é um recurso no serviço Oracle Cloud Infrastructure Compute que permite que os usuários migrem instâncias em execução entre diferentes domínios de falha sem qualquer tempo de inatividade. Ele permite que os usuários realizem manutenção ou balanceiem cargas de trabalho entre domínios de falha, mantendo a disponibilidade e o desempenho de seus aplicativos.