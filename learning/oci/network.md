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
- **Dynamic Routing Gateway**: é um tipo de gateway que permite que um VCN se conecte a uma rede local usando uma conexão Site-to-Site VPN ou FastConnect. Permite comunicação cloud to on-premises.

## VCN Routing

O roteamento é o processo de encaminhar pacotes de dados entre redes. O roteamento é feito por um roteador, que é um dispositivo de rede que encaminha pacotes de dados entre redes. O roteamento é feito com base em tabelas de roteamento, que são tabelas que mapeiam destinos de pacotes de dados a interfaces de rede.

![VCN Routing](https://miro.medium.com/v2/resize:fit:1400/1*9A-uFVT-BuRbThq_9Dhv6g.png)

## Peering

Peering é um processo de interconexão de redes. No contexto de um VCN, o peering é um processo de interconexão de VCNs. O peering permite que instâncias de computação em diferentes VCNs se comuniquem diretamente entre si, sem passar por gateways.

- **Local Peering**: Peering entre VCNs na mesma região.
- **Remote Peering**: Peering entre VCNs em diferentes regiões.


## VCN Security

A segurança de um VCN é garantida por meio de listas de controle de acesso (ACLs) e grupos de segurança. As ACLs são listas de regras que controlam o tráfego de entrada e saída de uma sub-rede. Os grupos de segurança são conjuntos de regras que controlam o tráfego de entrada e saída de uma instância de computação. Regras de firewall são usadas para permitir ou bloquear o tráfego de entrada e saída de uma instância de computação.

- **Security List**: Lista de regras de segurança que controlam o tráfego de entrada e saída de uma sub-rede.
- **Network Security Group**: Grupo de regras de segurança que controlam o tráfego de entrada e saída de uma sub-rede. 


## Load Balancer

O Load Balancer é um dispositivo de rede que distribui o tráfego de rede entre várias instâncias de computação. O Load Balancer é usado para distribuir o tráfego de rede entre várias instâncias de computação, para que o tráfego seja distribuído de forma equitativa entre as instâncias. O Load Balancer é usado para melhorar o desempenho e a disponibilidade de aplicativos. Layer 7 HTTP/HTTPS Load Balancer.

- **Flexible shape**: Pode definir o mínimo e máximo de tráfego que o Load Balancer pode suportar.
- **Dyanmic shape**: Shapes predefinidos que suportam um tráfego específico (ex. Medium, Large, etc.), Quando o tráfego excede o limite, o Load Balancer é escalado automaticamente para um shape maior.
- **Private Load Balancer**: Load Balancer que não é acessível pela internet. Apenas instâncias dentro do VCN podem acessar o Load Balancer.
- **Public Load Balancer**: Load Balancer que é acessível pela internet. Instâncias fora do VCN podem acessar o Load Balancer.

## Network Load Balancer
Layer 4 TCP/UDP Load Balancer. Public and Private Load Balancer. Altamente escalável e disponível. Muito mais rápido que o Load Balancer padrão.

