# Compute Services

Computer instances são baseadas em shapes (CPU, Memoria e Storage) e são executadas em instâncias virtuais (VMs), em hardware dedicado (Bare Metal) ou Deticated VM Hosts.

- **Virtual Machines**: VMs são instâncias de computação que rodam em hardware compartilhado. São altamente seguras. Não necessitam de toda máquina física para serem executadas.
- **Bar Metal**: São instâncias de computação que rodam em hardware dedicado. São altamente seguras. Necessitam de toda máquina física para serem executadas. Ideal para aplicações que necessitam de alto desempenho.
- **Deticated VM Hosts**: São instâncias de computação que rodam em hardware dedicado ou VM host dedicado. São altamente seguras. Necessitam de toda máquina física para serem executadas. Ideal para VMS mas atenção em termos de performance.

## Shapes

**Shapes**: Shapes são templates que determinam o número de CPUs, quantidade de memória e capacidade de armazenamento de uma instância. Shapes são classificados em Standard, DenseIO, GPU, HPC e Optimized. Existem dois tipos de shapes:

- **Flex**: Permite que você escolha o número de CPUs e a quantidade de memória.
- **Fixed**: Oferece um número fixo de CPUs e memória.

## Vertical Scaling

Vertical Scaling é o processo de aumentar ou diminuir a capacidade de uma instância. Você pode aumentar ou diminuir a capacidade de uma instância ao alterar o shape da instância. Fazendo um **scale up** ou **scale down**.

## Horizontal Scaling

Horizontal Scaling é o processo de aumentar ou diminuir o número de instâncias. Você pode aumentar ou diminuir o número de instâncias ao adicionar ou remover instâncias. Fazendo um **scale out** ou **scale in**. Podem ser feitos manualmente ou automaticamente baseado em métricas de monitoramento, ou em horários pré-definidos.



