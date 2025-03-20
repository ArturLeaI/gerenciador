# Aplicação de Gerenciamento de Clientes, Produtos e Pedidos

## Descrição do Projeto

O objetivo principal deste projeto é desenvolver uma aplicação que permite o cadastro e gerenciamento de clientes, produtos e pedidos. Os dados são armazenados localmente utilizando `localStorage`, garantindo que as informações persistam mesmo após o fechamento do navegador. A aplicação é construída com React e utiliza várias bibliotecas modernas para garantir uma experiência de usuário eficiente e agradável.

## Funcionalidades

### Clientes
1. **Cadastro de Clientes**
   - Campos: Nome, CNPJ, Telefone, CEP (com auto-preenchimento dos campos de endereço utilizando a API do ViaCEP), Estado, Cidade, Bairro, Endereço, Número.
2. **Listagem de Clientes**
   - Lista todos os clientes cadastrados.
   - Cada cliente na lista é um item clicável.
3. **Detalhamento de Clientes**
   - Ao clicar em um cliente, uma nova tela mostra todos os detalhes do cliente selecionado, incluindo todas as informações cadastradas.

### Produtos
1. **Cadastro de Produtos**
   - Campos: Nome, Valor, Upload de Foto do produto.
2. **Listagem de Produtos**
   - Lista todos os produtos cadastrados.
   - Cada produto na lista é um item clicável.
3. **Detalhamento de Produtos**
   - Selecionando um produto, será exibida uma tela com detalhes, incluindo nome, valor e foto do produto.

### Pedidos
1. **Cadastro de Pedidos**
   - Seleção de Cliente (escolhido da lista de clientes cadastrados).
   - Data do Pedido.
   - Carrinho de Produtos (seleção de produtos da lista de produtos cadastrados).
2. **Listagem de Pedidos**
   - Mostra todos os pedidos realizados em uma lista.

## Bibliotecas Utilizadas

- **React**: Biblioteca principal para o desenvolvimento do aplicativo.
- **Redux Toolkit**: Para gerenciamento eficiente do estado da aplicação.
- **React Hook Form**: Auxilia na manipulação e gerenciamento de formulários.
- **Yup**: Utilizado para adicionar validações aos formulários.
- **Styled Components**: Para estilização dos componentes.
- **Axios**: Para realizar requisições HTTP, por exemplo, para a API do ViaCEP.
- **localStorage**: Para o armazenamento local dos dados.
