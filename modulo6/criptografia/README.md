# Exercícios da aula sobre *Criptografia*

> Refatoração do código da aula sobre autenticação para incluir um método de criptografia de senha usando a biblioteca **BcryptJS**

Tecnologias utilizadas:

- Typescript,
- Express,
- KNEX,
- SQL,
- UUID,
- JWT
- BcryptJS

Respostas das questões:

**O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?**

*R: Cost: é um fator númerico que está relacionado a complexidade e segurança da senha, quanto maior o cost, mais demorada é a execução do algoritmo da biblioteca.<br>
Salt: é uma string aleatória gerada pelo próprio algortimo para compor o hash.
Neste exercício, com fins didáticos, foi usado cost de 12 pois é um padrão usado pela maior parte das libs*

*R: Aumenta a complexidade do id e as combinações disponíveis quando se usar número + letras.*

**a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.**

*R: O cadastro, porque o login ficaria impossibilitado de funcionar já que na refatoração do login já vai a função de comparação da própria biblioteca que exige que seja passado um hash*

**d) No exercício da aula anterior, nós criamos o endpoint user/edit. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.**

*R: Não. Pois esse endpoint não requere a senha do usuário, mas requere o token de autenticação e para obte-lo precisa fazer o login que já foi refatorado com a criptografia.*