# Exercício da Aula 'Serviços no backend'

## Assuntos abordados:

- Como integrar APIs no backend
- Como utilizar o node mailer
- Como Fazer deploy

## Tecnologias e bibliotecas usadas:

- Node,
- Typescript,
- Express,
- SQL,
- Knex,
- Dotenv,
- Axios

## Exercícios: 

> Escrever uma função que receba um CEP, faça uma requisição para a url https://viacep.com.br/ws/:cep/json/ e retorne um objeto contendo:

- Logradouro
- Bairro
- Cidade
- Estado

> No seu banco de dados, criar uma tabela para guardar as seguintes informações de endereço de um usuário:

- CEP
- Logradouro
- Número
- Complemento (opcional)
- Bairro
- Cidade
- Estado

> Refatorar o endpoint de cadastro para que ele receba, também, as informações básicas de endereço do usuário (CEP, número e complemento) e preencha todos os campos da tabela criada no exercício anterior.

> Mandar um email utilizando o NodeMailer

> Fazer o deploy da aplicação com Render

**Url do Deploy:** https://backend-services.onrender.com