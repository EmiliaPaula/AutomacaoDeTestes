# Projeto Leilão

## Descrição
Este projeto simula um leilão de produto, permitindo que os usuários insiram lances e recebam feedback sobre a validade de seus lances.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Cypress (para testes automatizados)

## Pré-requisitos
Antes de começar, você precisa ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixar e instalar 
o Node.js a partir de [nodejs.org](https://nodejs.org/).

## Configuração do Ambiente

1. **Clone o Repositório**
   Abra um terminal e clone este repositório com o comando:
   ```bash
   git clone https://github.com/EmiliaPaula/AutomacaoDeTestes.git


2. **Navegue até a Pasta do Projeto**
   bash
   cd leilao

3. Instale as Dependências Instale o Cypress e outras dependências com o seguinte comando:
  bash
  npm install

4. Servir o Projeto Para que os testes funcionem corretamente, você precisa servir o projeto através de um servidor local. Você pode
   usar o Live Server no Visual Studio Code ou um servidor HTTP como http-server.

Usando o Live Server:

Instale a extensão "Live Server" no Visual Studio Code.
Abra o index.html no VS Code.
Clique com o botão direito e selecione "Open with Live Server".
Usando http-server (se preferir):

Instale o http-server globalmente:
  bash
  npm install -g http-server

Execute o servidor na pasta do projeto:
  bash
  http-server

5. Abrir o Cypress Para abrir o Cypress, execute o seguinte comando no terminal:
   bash
   npx cypress open

6. Executar os Testes Na interface do Cypress que se abrir, clique no arquivo leilao.spec.js para rodar os testes automatizados.
   O Cypress abrirá um novo navegador onde os testes serão executados.
  

