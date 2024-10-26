# Network Services

## Virtual Cloud Network (VCN)

O **Virtual Cloud Network (VCN)** é uma rede privada na nuvem que você pode provisionar isoladamente ou como parte de um conjunto de recursos relacionados. Cada VCN é composto por sub-redes, que contêm instâncias de computação, como máquinas virtuais, e outros recursos relacionados. Cada VCN é um escopo isolado e não se sobrepõe a outras VCNs. Cada VCN é associado a uma única região OCI e não pode se estender para outras regiões.

![VCN](https://www.techsupper.com/wp-content/uploads/2023/06/VCN.png)

Rede privada de comunicação segura que reside em uma região OCI. Atamente disponível, segura e escalável.

## VNC Address Space

O espaço de endereço de um VCN é um bloco CIDR (Classless Inter-Domain Routing) de endereços IP privados que você atribui ao VCN. O bloco CIDR é um intervalo de endereços IP privados que você especifica ao criar o VCN. Você pode usar qualquer bloco CIDR privado, desde que não se sobreponha a outros blocos CIDR em uso em sua região OCI. Cada Address space é subdividido em sub-redes (subnets).

## Gateway

O gateway é um dispositivo que conecta redes. No contexto de um VCN, o gateway é um dispositivo que conecta a rede local à rede do VCN. O gateway é um roteador que encaminha o tráfego entre a rede local e o VCN.

- **Internet Gateway**: é um tipo de gateway que permite que instâncias de computação no VCN se comuniquem com a internet.
- **NAT gateway**: é um tipo de gateway que permite que instâncias de computação no VCN se comuniquem com a internet, mas não permite que a internet se comunique com as instâncias (apenas Outbound e não Inbound).
- **Service Gateway**: é um tipo de gateway que permite que instâncias de computação no VCN se comuniquem com serviços Oracle sem usar a internet pública.
- **Dynamic Routing Gateway (DRG)**: é um tipo de gateway que permite que um VCN se conecte a uma rede local usando uma conexão Site-to-Site VPN ou FastConnect. Permite comunicação cloud to on-premises. E permite comunicação entre VCNs em diferentes regiões.

## VCN Routing

O roteamento é o processo de encaminhar pacotes de dados entre redes. O roteamento é feito por um roteador, que é um dispositivo de rede que encaminha pacotes de dados entre redes. O roteamento é feito com base em tabelas de roteamento, que são tabelas que mapeiam destinos de pacotes de dados a interfaces de rede.

Uma Tabela de Rota é um componente no Oracle Cloud Infrastructure Networking Service que define regras para encaminhamento de pacotes para destinos fora da Virtual Cloud Network (VCN). As Tabelas de Rota têm regras para rotear tráfego de sub-redes para destinos fora da VCN por meio de gateways ou instâncias especialmente configuradas.

![VCN Routing](https://miro.medium.com/v2/resize:fit:1400/1*9A-uFVT-BuRbThq_9Dhv6g.png)

## Peering

Peering é um processo de interconexão de redes. No contexto de um VCN, o peering é um processo de interconexão de VCNs. O peering permite que instâncias de computação em diferentes VCNs se comuniquem diretamente entre si, sem passar por gateways.

- **Local Peering**: Peering entre VCNs na mesma região.
- **Remote Peering**: Peering entre VCNs em diferentes regiões.

## VCN Security

A segurança de um VCN é garantida por meio de listas de controle de acesso (ACLs) e grupos de segurança. As ACLs são listas de regras que controlam o tráfego de entrada e saída de uma sub-rede. Os grupos de segurança são conjuntos de regras que controlam o tráfego de entrada e saída de uma instância de computação. Regras de firewall são usadas para permitir ou bloquear o tráfego de entrada e saída de uma instância de computação.

- **Security List**: Lista de regras de segurança que controlam o tráfego de entrada e saída de uma sub-rede.
- **Network Security Group**: Grupo de regras de segurança que controlam o tráfego de entrada e saída de uma sub-rede. 

No Oracle Cloud Infrastructure, as Listas de Segurança são responsáveis ​​por controlar o tráfego entre sub-redes dentro de uma rede de nuvem virtual (VCN). Elas definem regras de entrada e saída para determinar o tráfego permitido no nível de sub-rede.

## Load Balancer

O Load Balancer é um dispositivo de rede que distribui o tráfego de rede entre várias instâncias de computação. O Load Balancer é usado para distribuir o tráfego de rede entre várias instâncias de computação, para que o tráfego seja distribuído de forma equitativa entre as instâncias. O Load Balancer é usado para melhorar o desempenho e a disponibilidade de aplicativos. Layer 7 HTTP/HTTPS Load Balancer.

O Oracle Cloud Infrastructure Load Balancer oferece suporte a três tipos de algoritmos de balanceamento de carga: Round Robin, Least Connections e IP Hash. O algoritmo Round Robin distribui o tráfego de entrada uniformemente entre as instâncias. Esse algoritmo ajuda a garantir a distribuição eficiente do tráfego de rede e a manter a disponibilidade e o desempenho dos aplicativos. Weighted Round Robin, Weighted Least Connections e Random não são suportados pelo OCI Load Balancer.

- **Flexible shape**: Pode definir o mínimo e máximo de tráfego que o Load Balancer pode suportar.
- **Dyanmic shape**: Shapes predefinidos que suportam um tráfego específico (ex. Medium, Large, etc.), Quando o tráfego excede o limite, o Load Balancer é escalado automaticamente para um shape maior.
- **Private Load Balancer**: Load Balancer que não é acessível pela internet. Apenas instâncias dentro do VCN podem acessar o Load Balancer.
- **Public Load Balancer**: Load Balancer que é acessível pela internet. Instâncias fora do VCN podem acessar o Load Balancer.

## Network Load Balancer
Layer 4 TCP/UDP Load Balancer. Public and Private Load Balancer. Altamente escalável e disponível. Muito mais rápido que o Load Balancer padrão.

## VPN

O VPN é um serviço que permite que instâncias de computação em diferentes VCNs se comuniquem entre si usando uma conexão segura. O VPN é usado para conectar VCNs em diferentes regiões. O VPN é usado para conectar VCNs a redes locais.

## Fastconnect

O FastConnect é um serviço que permite que instâncias de computação em diferentes VCNs se comuniquem entre si usando uma conexão de alta velocidade. O FastConnect é usado para conectar VCNs em diferentes regiões. O FastConnect é usado para conectar VCNs a redes locais. 

- Com colocation, você pode conectar sua rede local diretamente à rede Oracle Cloud em um data center compartilhado. Com
- Com provedores parceiros, você pode conectar sua rede local à rede Oracle Cloud por meio de um provedor de serviços de rede.

