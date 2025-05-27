## Sobre o Projeto

O objetivo principal deste projeto é oferecer uma solução prática para o cadastro e a consulta de clientes, o registro e a visualização de produtos (incluindo imagens), e a criação e o acompanhamento de pedidos. Todos os dados inseridos na aplicação são armazenados diretamente no navegador do usuário, utilizando a API `localStorage`. Isso garante que as informações permaneçam salvas entre as sessões de uso, mesmo após fechar e reabrir o navegador, sem a necessidade de um banco de dados externo ou backend complexo para esta versão.

A aplicação foi desenvolvida com React e utiliza ferramentas como Redux Toolkit para gerenciamento de estado, React Hook Form e Yup para validação e controle de formulários, e Styled Components para estilização, visando uma base de código organizada e manutenível.



## Funcionalidades Principais

A aplicação oferece um conjunto de funcionalidades voltadas para o gerenciamento comercial básico. Os usuários podem realizar o cadastro completo de clientes, incluindo informações como nome, CNPJ, telefone e endereço. O sistema integra-se à API ViaCEP para buscar e preencher automaticamente os dados de endereço a partir do CEP informado, agilizando o processo. Todos os clientes cadastrados são exibidos em uma lista interativa, onde cada item pode ser clicado para visualizar os detalhes completos do cliente em uma tela dedicada.

De forma similar, é possível gerenciar produtos. A funcionalidade de cadastro permite registrar o nome, o valor e fazer o upload de uma foto para cada produto. A listagem de produtos apresenta todos os itens cadastrados, e ao selecionar um produto específico, o usuário é direcionado para uma página de detalhes que exibe todas as informações registradas, incluindo a imagem.

O gerenciamento de pedidos também é uma parte central da aplicação. O usuário pode criar novos pedidos selecionando um cliente previamente cadastrado e adicionando produtos ao carrinho a partir da lista de produtos disponíveis. A data do pedido é registrada automaticamente. Por fim, todos os pedidos criados podem ser visualizados em uma lista consolidada.



## Tecnologias Utilizadas

O desenvolvimento desta aplicação se baseou em um conjunto de tecnologias e bibliotecas modernas do ecossistema JavaScript, visando produtividade, performance e manutenibilidade:

*   **React:** Biblioteca principal para a construção da interface de usuário.
*   **Vite:** Ferramenta de build e servidor de desenvolvimento rápido para projetos web modernos.
*   **Redux Toolkit:** Solução oficial e opinativa para gerenciamento de estado eficiente em aplicações React, simplificando o uso do Redux.
*   **React Hook Form:** Biblioteca para gerenciamento de formulários em React, focada em performance e facilidade de uso com hooks.
*   **Yup:** Construtor de esquemas para validação de dados, utilizado em conjunto com o React Hook Form para validar os campos dos formulários.
*   **Styled Components:** Biblioteca que permite escrever CSS diretamente nos componentes React, facilitando a criação de componentes estilizados e reutilizáveis.
*   **Axios:** Cliente HTTP baseado em Promises para fazer requisições, utilizado aqui para interagir com a API ViaCEP.
*   **React Router DOM:** Biblioteca para gerenciamento de rotas na aplicação, permitindo a navegação entre diferentes páginas/componentes.
*   **React Icons:** Biblioteca que fornece acesso fácil a uma vasta coleção de ícones populares.
*   **localStorage:** API do navegador utilizada para armazenar os dados da aplicação localmente.

## Pré-requisitos

Antes de iniciar a instalação e execução do projeto em seu ambiente local, certifique-se de que possui os seguintes softwares instalados:

*   **Node.js:** É necessário ter o Node.js instalado para gerenciar as dependências e executar os scripts do projeto. Recomenda-se utilizar a versão LTS (Long Term Support) mais recente. Você pode verificar a instalação executando `node -v` no seu terminal.
*   **npm** ou **yarn:** O Node.js já vem com o npm (Node Package Manager) incluído. Alternativamente, você pode usar o yarn. Verifique a instalação com `npm -v` ou `yarn -v`.

## Instalação

Siga os passos abaixo para configurar o projeto em sua máquina local:

1.  **Clone o repositório:** Abra seu terminal, navegue até o diretório onde deseja salvar o projeto e execute o seguinte comando git:
    ```bash
    git clone https://github.com/ArturLeaI/gerenciador.git
    ```
2.  **Acesse o diretório do projeto:** Após o clone ser concluído, entre na pasta do projeto:
    ```bash
    cd gerenciador
    ```
3.  **Instale as dependências:** Utilize o npm (ou yarn) para instalar todas as dependências listadas no arquivo `package.json`:
    ```bash
    npm install
    ```
    ou, se preferir usar o yarn:
    ```bash
    yarn install
    ```
    Este comando fará o download e a instalação de todas as bibliotecas necessárias para o funcionamento da aplicação.

## Executando o Projeto

Com as dependências instaladas, você pode iniciar o servidor de desenvolvimento local. Execute o seguinte comando no terminal, dentro do diretório do projeto:

```bash
npm run dev
```

Este comando utiliza o Vite para iniciar a aplicação em modo de desenvolvimento. O Vite compilará o projeto e o disponibilizará em um endereço local, geralmente `http://localhost:5173` (a porta pode variar se a 5173 já estiver em uso). O terminal indicará o endereço exato onde a aplicação está rodando. Abra este endereço em seu navegador para acessar e interagir com o gerenciador.

O servidor de desenvolvimento também oferece *Hot Module Replacement* (HMR), o que significa que as alterações feitas no código-fonte serão refletidas automaticamente no navegador sem a necessidade de recarregar a página manualmente.

## Build

Quando for necessário gerar uma versão otimizada da aplicação para produção, você pode utilizar o script de build. Execute o comando abaixo no terminal:

```bash
npm run build
```

Este comando instrui o Vite a compilar e minificar os arquivos do projeto (HTML, CSS, JavaScript), gerando uma pasta `dist` (ou similar, dependendo da configuração) no diretório raiz do projeto. Os arquivos dentro desta pasta estão prontos para serem hospedados em um servidor web estático.
