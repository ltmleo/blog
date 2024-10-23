# Oracle Cloud Introduction


- **OCI**: Oracle Cloud Infrastructure

## Oracle Cloud Infrastructure (OCI)
- **Compute**: Virtual Machines, Bare Metal, Container Engine, Functions
- **Storage**: Block Volume, Object Storage, File Storage, Archive Storage
- **Networking**: VCN, Load Balancer, FastConnect, DNS, VPN
- **Database**: Autonomous Database, Exadata Cloud Service, MySQL, NoSQL, etc.
- **Native Vmware Solution**: VMware Solution on OCI
- **Developer Services**: Developer Cloud, API Gateway, Functions, etc.
- **Containers and Functions**: Container Engine, Functions
- **Machine Learning and AI**: Data Science, AI, etc.
- **Data Lakehouse**: Big Data, Data Integration, Data Flow, etc.
- **Analytics and BI**: Analytics, Data Integration, Data Flow, etc.

Todas as camadas possuem **Segurança**, **Observabilidade**, **Governança** e **Gerenciamento de Custos**.

## Oracle Cloud Applications

- Enterprise Resource Planning
- Human Capital Management
- Customer Experience
- Supply Chain Management
- Advertising and Customer Experience
- Industry Applications
- ISV and custom applications

## OCI Architecture

- **Region**: Uma região é um local geograficamente distinto que contém um ou mais Availability Domains (ADs).
- **Availability Domain (AD)**: Um AD é um data center independente com alimentação, resfriamento e conectividade redundantes. Conectados entre si por uma rede de baixa latência e alta largura de banda.
- **Fault Domain**: Um Fault Domain é uma coleção de hardware e infraestrutura de software dentro de um AD. Cada AD tem três ou mais Fault Domains. Protege contra falhas de hardware e software inesperadas.


FDs agem como um data center logico dentro de um AD. FDs são isolados uns dos outros, portanto, uma falha em um FD não afeta os outros FDs em um AD.


### Escolhendo uma região

- **Proximidade**: Escolha uma região próxima aos seus usuários finais, para reduzir a latência e melhorar o desempenho.
- **Data Residency**: Alguns países possuem leis que exigem que os dados dos cidadãos sejam armazenados no país. Escolha uma região que atenda a esses requisitos.
- **Recursos**: Nem todas as regiões possuem todos os recursos. Verifique a disponibilidade dos recursos na região escolhida.

### Availability Domains

Isolados uns dos outros, portanto, uma falha em um AD não afeta os outros ADs em uma região. Muito pouco provável que dois ADs falhem ao mesmo tempo. A infraestrutura física nao é compartilhada entre ADs.

::: note
Uma região OCI é composta de um ou mais domínios de disponibilidade isolados e interconectados. Cada domínio de disponibilidade é um local físico separado dentro de uma região. O número de domínios de disponibilidade por região pode variar; algumas regiões OCI têm três domínios de disponibilidade, enquanto outras têm um único domínio de disponibilidade.
:::

### Fault Domains
Grupo de hardware e infraestrutura de software dentro de um AD. Cada AD tem três ou mais FDs. Protege contra falhas de hardware e software inesperadas e contra falhas planejadas, como atualizações de software.

Voce pode escolher o falut domain onde sua instância será provisionada. Se não fizer nenhuma escolha, o Oracle escolherá um FD para você, garantindo que suas instâncias sejam distribuídas em diferentes FDs. 

Voce pode mudar o FD de uma instancia editando o fault domain, para bare metal ou VM DB System instance, precisa terminar a instancia e depois lançar ela em um novo FD.


