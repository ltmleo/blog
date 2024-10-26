# Storage Services

- **persistence**: armazenamento de dados persistente. Dados não são perdidos quando a instância é desligada.
- **durability**: dados são duráveis e não são perdidos. Se um disco falhar, os dados são recuperados.

Existem quatro tipos de serviços de armazenamento no Oracle Cloud Infrastructure:

- **Local NVMe**: Armazenamento localmente anexado a instâncias de computação. Armazenamento de alta performance.
- **Block Volume**: Armazenamento de bloco para instâncias de computação.
- **File Storage**: Armazenamento **compartilhado** de arquivos para instâncias de computação.
- **Object Storage**: Armazenamento de objetos para dados não estruturados. Armazenamento para web.

## Block Volume

O **Block Volume** é um serviço de armazenamento de bloco que permite que você armazene dados em volumes de bloco independentes que podem ser anexados a instâncias de computação. Os volumes de bloco são ideais para uso como volumes de inicialização, volumes de aplicativos e volumes de dados que podem ser anexados a instâncias de computação.

Discos persistentes que podem ser anexados a instâncias de computação. Os volumes de bloco são ideais para uso como volumes de inicialização, volumes de aplicativos e volumes de dados que podem ser anexados a instâncias de computação.

Podemos criar e anexar discos em instâncias de computação. Podemos desanexar e anexar em outras instancias ou deletar, podemos deletar a VM e manter o disco, assim podemos criar outra VM e anexar o disco.

Replicação sincrona de dados entre data centers. Alta disponibilidade e durabilidade para disastre recovery, migração de dados, expansão do negocio, etc.

Volume Groups: Conjunto de volumes de bloco que são criados juntos e anexados a uma instância de computação. Podem ser usados para armazenamento de dados de aplicativos, bancos de dados, etc.

### Performance

- **Ultra High Performance**: 225 IOPS/GB up to a maximum of 300,000 IOPS per volume. Throughput also scales at the highest rate at 1,800 KB/s/GB up to a maximum of 2,680 MB/s per volume.
- **High Performance**: 75 IOPS/GB up to a maximum of 50,000 IOPS per volume. Throughput scales at the rate 600 KB/s/GB up to a maximum of 680 MB/s per volume.
- **Balanced Performance**: 60 IOPS/GB up to 25,000 IOPS per volume. Throughput scales at 480 KB/s/GB up to a maximum of 480 MB/s per volume.
- **Low Cost**: 2 IOPS/GB upt to a maximum of 3000 IOPS per volume. Throughput scales at 240 KB/s/GB up to the maximum of 480 MB/s per volume.

## File Storage

Armazenamento compartilhado de arquivos para instâncias de computação. Ideal para containers, big data, analytics, etc. Gerenciamento de dados como arquivos.

O serviço Oracle Cloud Infrastructure File Storage usa o protocolo Network File System (NFS) para acesso a arquivos. O NFS permite que os clientes acessem arquivos por uma rede de uma maneira que pareça que eles são parte do sistema de arquivos local.

Coleçã de arquivos hierarquicos organizados em diretórios. Cada arquivo tem um caminho único. Cada arquivo tem um **File Storage Namespace** único.

Filesystem distribuido (Linux NFS, Windows SMB). Suporta Unix e Windows, Permite criar, deletar, ler, escrever, etc. Suportado pela maioria dos sistemas operacionais. e hypervisors. Tipicamente não precisa de um cliente extra para acessar. Prove acesso sobre redes.

**Use Cases**: EBS (Oracle applications lift and shift), General purpose file system, micro services e containers. escalar horizontalmente aplicações, analytics, etc.

## Object Storage

Armazenamento de objetos para dados não estruturados. Ideal para armazenamento de dados para web, backup e arquivamento, armazenamento de logs, armazenamento de imagens, etc.

Internet-scale, segurança de dados, durabilidade, alta disponibilidade, etc. Ideal para dados não estruturados (logs, vidoes, imagens, etc). Gereciamento de dados como objetos. 

Objetos são armazenados em **buckets**. Cada objeto é armazenado em um bucket. Cada objeto tem um **Object Storage Namespace** único.

Namespace é uma entidade logica, um container top-level para todos os buckets e objetos.

Cada object storage tem um nome único no tanancy e possuem hierarquia flat.

### Tiers

- **Standard (hot)**: Dados frequentemente acessados. Copia mais recente dos dados. recuperação imediata. Não pode ser downgraded.
- **Infrequent Access (cool)**: Dados acessados menos frequentemente. Custa menos que o Standard. Retenção minima de 31 dias. Taxa de recuperação de dados.
- **Archived (cold)** Dados raramente acessados. Custa menos que o Infrequent Access. Retenção minima de 90 dias. Taxa de recuperação de dados. Objetos precisam ser restaurados antes de serem acessados. Tempo de restauração de 1 hora. Download time de 24 horas. Não pode ser upgraded.

- Auto-tiering: Mover automaticamente objetos entre os tiers baseado em padrões de acesso.
- Auto-versioning: Manter versões anteriores de objetos.

## OCI Data Migration Services

- **Data Transfer Disk**: Serviço de transferência de dados para mover grandes volumes de dados para a Oracle Cloud.
- **Data Transfer Appliance**: Serviço de transferência de dados para mover grandes volumes de dados para a Oracle Cloud.
- **Storage Gateway**: Serviço de transferência de dados para mover grandes volumes de dados para a Oracle Cloud.