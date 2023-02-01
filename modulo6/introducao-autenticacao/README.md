# Exercícios da aula de Introdução a Autenticação

> Exercícios elaborados a partir de um template de API que roda localmente, para treinar os conhecimentos sobre autenticação utilizando as ferramentas **UUID** e **json-web-token**

tecnologias utilizadas:

- Typescript,
- Express,
- KNEX,
- SQL,
- UUID,
- JWT

Respostas das questões:

**Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?**

*R: Aumenta a complexidade do id e as combinações disponíveis quando se usar número + letras.*

**O que a linha as string faz? Por que precisamos usar ela em (process.env.JWT_KEY as string)**

*R: Para confirmar que o dado será uma string pois o que vem do dotenv é do tipo secreto.*


