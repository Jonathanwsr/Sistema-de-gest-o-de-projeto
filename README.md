# Projeto de Gerenciamento de Projetos em React

Este projeto é uma aplicação React desenvolvida para auxiliar no gerenciamento de projetos. Ele permite aos usuários criar, visualizar, atualizar e deletar projetos, facilitando o acompanhamento e organização de tarefas.

## Funcionalidades Principais

* **Criação de Projetos:** Adicione novos projetos com detalhes como nome, descrição e status.
* **Visualização de Projetos:** Veja todos os projetos em uma lista organizada.
* **Atualização de Projetos:** Edite as informações dos projetos existentes.
* **Deleção de Projetos:** Remova projetos que não são mais necessários.
* **Interface Intuitiva:** Design moderno e fácil de usar.
* **Dados Persistentes:** Utiliza JSON Server para simular um backend e persistir os dados.

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **React Router DOM:** Para navegação entre as páginas da aplicação.
* **React Icons:** Biblioteca de ícones para melhorar a interface.
* **UUID:** Para geração de IDs únicos para os projetos.
* **JSON Server:** Para simular uma API REST e armazenar os dados.

## Pré-requisitos

* Node.js e npm (ou yarn) instalados.

## Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd [nome do diretório do projeto]
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Instale o JSON Server globalmente (se ainda não estiver instalado):
    ```bash
    npm install -g json-server
    ```

## Executando o Projeto

1.  Inicie o servidor JSON Server:
    ```bash
    json-server --watch db.json --port 5000
    ```
    * Certifique-se de criar um arquivo `db.json` na raiz do seu projeto para armazenar os dados. Exemplo de conteudo do db.json:
    ```json
    {
        "projects": []
    }
    ```
2.  Inicie a aplicação React em outro terminal:
    ```bash
    npm start
    ```
3.  Abra o navegador em `http://localhost:3000`.

## Scripts Disponíveis

* **`npm start`**: Inicia a aplicação em modo de desenvolvimento.
* **`npm test`**: Executa os testes unitários.
* **`npm run build`**: Compila a aplicação para produção.
* **`npm run eject`**: Expõe as configurações do Create React App (uso avançado).

## Dependências

* `react`: Biblioteca principal do React.
* `react-dom`: Permite o uso do React no navegador.
* `react-router-dom`: Para roteamento na aplicação.
* `react-icons`: Biblioteca de ícones.
* `uuid`: Para geração de IDs únicos.
* `json-server`: Para simular uma API REST.

## Contribuindo

Se você deseja contribuir para este projeto, siga estas etapas:

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`).
3.  Faça commit das suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4.  Faça push para a branch (`git push origin feature/NovaFuncionalidade`).
5.  Abra um Pull Request.

## Licença



## Contato


