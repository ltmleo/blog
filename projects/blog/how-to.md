---
sidebar_position: 1
---
# Como Criar um blog do zero com Docussaurus

[Docussaurus](https://docusaurus.io/pt-BR/) é uma ferramenta de código aberto do Facebook para construir sites estáticos usando React. Ele foi criado para ser fácil de usar e configurar, permitindo que você crie rapidamente um site estático com uma aparência profissional e trabalhe ele segundo princípios de documentação como código.

Podemos usar o Docussaurus para criar documentações, blogs, portfólios, páginas de produtos, páginas de marketing e muito mais.

## Criando um novo projeto

O docussaurus possui uma [documentação](https://docusaurus.io/pt-BR/docs/category/getting-started) bem completa, então recomendo que você dê uma olhada nela para entender melhor como funciona.

Para criar um novo projeto, basta executar o comando abaixo:
```bash
npx @docusaurus/init@next init my-website classic
cd my-website
```

E para rodar sua aplicação:

```bash
npm run start
```
Acesse [http://localhost:3000](http://localhost:3000)

## Deploy
O deploy do seu site pode ser feito de diversas formas, o docussaurus possui uma [documentação](https://docusaurus.io/pt-BR/docs/deployment) bem completa sobre isso.

No meu caso estou utilizando o Github Pages, então basta adicionar o arquivo abaixo na pasta `.github/workflows/`:

```yaml title=".github/workflows/deploy.yml"
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: 'build'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
Se tudo der certo seu site vai compilar e ser publicado no [Github Pages](https://pages.github.com/). 

Você pode ver o resultado em `<nome_do_seu_usuario>.github.io/<nome_do_seu_repositorio>`.
