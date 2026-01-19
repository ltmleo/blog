---
description: Um guia para líderes técnicos, de produtos e de pessoas
---
import BookDisplay from '@site/src/components/BookDisplay';

# Engenharia de Plataforma

<BookDisplay 
  title="Engenharia de Plataforma"
  author="Camille Fournier e Ian Nowland"
  coverImage="https://m.media-amazon.com/images/I/51WWI4kVm-L._SY425_.jpg"
  publishDate="2025"
  summary="Nos últimos 25 anos, as organizações de software têm enfrentado um desafio persistente: como gerenciar código, ferramentas e infraestrutura compartilhados entre várias equipes. Equipes centralizadas em geral são insuficientes — oferecendo sistemas desajeitados, ignorando as necessidades do usuário e não conseguindo entregar estabilidade e confiabilidade. Algumas organizações tentaram o outro extremo, mas o resultado é frequentemente o caos, com pequenas equipes afogando-se em complexidade. Algumas poucas selecionadas decifraram o código ao adotar uma abordagem diferente: engenharia de plataforma. Elas criam plataformas robustas e fáceis de usar para controlar a complexidade, fornecer alavancagem e aumentar a produtividade da equipe de aplicativos. Este livro prático orienta engenheiros, gerentes, gerentes de produto e líderes por meio das mudanças que as organizações modernas lideradas por plataforma exigem. Você aprenderá o que é engenharia de plataforma — e o que não é — e porque ela está se tornando essencial. Com este livro, você irá: • Cultivar uma mentalidade centrada no desenvolvedor e na plataforma como produto • Aprender o que são e o que não são equipes de engenharia de plataforma • Iniciar o processo de adoção da engenharia de plataforma em sua organização • Descobrir do que se precisa para se tornar um gerente de produto para uma equipe de plataforma • Entender os desafios que surgem à medida que você escala plataformas • Obter insights sobre as melhores práticas para liderar equipes de engenharia de plataforma bem-sucedidas. “Engenharia de plataforma é um esporte de equipe. Este é seu manual.” Kelsey Hightower Ex-Distinguished Engineer do Google e coautor de Kubernetes: Up & Running (O’Reilly)"
/>

## Notas

- Pelo menos 60-70% do custo da vida útil do software aumenta apos o desenvolvimento inicial. (p. 25)
- Na pressa de entregar, eles criam qualquer cola personalizada necessária para manter tudo unido e são recompensados com elogios pela entrega rápida (p. 25)
- Antigo principio de arquitetura, mais caixas, menos linhas (p. 26)
- Mias cola YAML e menos cola terraform. Mas o objetivo principal da engenharia de plataforma é reduzir a cola total. (p. 29)
- O problema com o OSS é proliferação de escolhas, Equipes de aplicativos com necessidades especificas geralmente podem encontrar uma solução OSS que seja ótima para elas mas não necessariamente para a organização como um todo. (p. 29)
- Padronização por meio de autoridade não basta. (p. 32)
- Pode ser difícil para um ovo se transformar em um pássaro; seria muita mais difícil para um pássaro apresentar a voar enquanto permanece um ovo. - C. S. Lewis (p. 55)
- Construir plataformas /e mais do que operar, dimensionar e dar suporte ao software de outras pessoas. (p. 57)
- Quantos mais pontos de coordenação ele tem que atravessar para entregar seus produtos, mais difícil o trabalho se torna (p. 67)
- Desembaraçar mais do que rearquitetar (p. 69)

## Conceitos

- **Plataforma**: Base de APIs de autoatendimento, ferramentas e serviços que suportam o desenvolvimento, implantação e operação de aplicativos.
- **Engenharia de Plataforma**: Disciplina focada na criação e manutenção de plataformas que facilitam o trabalho das equipes de desenvolvimento, promovendo eficiência e escalabilidade.
- **Alavancagem**: Capacidade de maximizar a produtividade e eficiência das equipes de desenvolvimento através do uso de plataformas e ferramentas compartilhadas. O trabalho de uma equipe de plataforma é criar alavancagem para outras equipes.
- **Produto**: Uma plataforma deve ser tratada como um produto, com foco nas necessidades dos usuários (desenvolvedores) e na entrega de valor contínuo.
- **Primitivo**: Componentes básicos e reutilizáveis que formam a base de uma plataforma, permitindo que as equipes construam soluções mais complexas de maneira eficiente.
- **Caminhos pavimentados**: Conjuntos de práticas recomendadas e ferramentas que facilitam o desenvolvimento e a implantação de aplicativos, reduzindo a complexidade para as equipes de desenvolvimento.
- **Ferrovias**: Como as equipes de aplicativos solucinam problemas na lacuna.

**Pantano generalizado**: Situação em que múltiplas equipes criam soluções personalizadas para problemas semelhantes, resultando em complexidade e ineficiência.
Causas:
- Explosão de escolhas: Muitas opções de ferramentas e tecnologias levam as equipes a escolherem soluções diferentes para problemas semelhantes.
- Maiores necessidades operacionais: À medida que as organizações crescem, as necessidades operacionais se tornam mais complexas, levando as equipes a desenvolverem soluções personalizadas.

- **Integrando registro de metadados**: Propriedade, controle de acesso, eficiência de custos, migrações, sistema de gerenciamento de tags, registro de API/esquema, portais internos do desenvolvedor (IDP).
- **Autoatendimento**: Interfaces de autoatendimento, observabilidade do usuário, guardrails e multilocação

**Plataformas que dão alavancagem em tempo de desenvolvimento mas não de operação: Plataformas de provisionamento, plataformas de framework e plataforma de ferramentas. 