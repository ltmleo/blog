# Network Services

## Virtual Cloud Network (VCN)

O **Virtual Cloud Network (VCN)** é uma rede privada na nuvem que você pode provisionar isoladamente ou como parte de um conjunto de recursos relacionados. Cada VCN é composto por sub-redes, que contêm instâncias de computação, como máquinas virtuais, e outros recursos relacionados. Cada VCN é um escopo isolado e não se sobrepõe a outras VCNs.

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
