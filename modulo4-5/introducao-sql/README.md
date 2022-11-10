<div align="center">

# EXERCÍCIOS DE INTRODUÇÃO A SQL

![logospng](./mysql-256.png)

</div>

<h3 align="center"> ----------- EXERCÍCIO 01 ----------- </h3> </br>

> Durante essa semana iremos construir, nos exercícios propostos, um pequeno sistema de um cinema. Ele deverá ter informações sobre atores e atrizes, filmes, ingressos, e mais. Faça os exercícios abaixo em ordem. 
Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo. </br>
 
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

**RESPOSTA:** Varchar para strings com o número de caracteres limitado dentro do parênteses; date para uma data no formato "ano-mÊs-dia"; Not Null para indicar que o campo precisa ser obrigatóriamente preenchido; Primary Key para definir um valor único para cada registro. 

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

**RESPOSTA:** Show Databases mostra os banco de dados disponíveis no minha Workbranch e Show Tables mostra as tabelas criadas.

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

**RESPOSTA:** Mostra todos a formatação dos campos: nome das colunas, type de dados de cada coluna, se a coluna pode ou não se nula.

<h3 align="center"> ----------- EXERCÍCIO 02 ----------- </h3> <br>

> O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

*a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

**RESPOSTA:** o erro acontece pois o programa não aceita um registro com primary key repetida, que já exista em um exercício anterior.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Teste",
  4000,
  "1958-09-28", 
  "male"
);
```

*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

c -> ```INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);```

**RESPOSTA:** A contagem de colunas não correspondem a contagem do valor de correspondências.

d -> ```INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);```

**RESPOSTA:** Não foi passado dado para o campo nome e ele não possui um valor default para ser autopreenchido.

e -> ```INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);```

**RESPOSTA:** A data precisa ser em formato string e deve ser passada entre aspas.

*Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.*

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Antônio Fagundes",
  200000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Patrícia Pillar",
  80000,
  "1964-01-11", 
  "female"
);
``` 
<h3 align="center"> ----------- EXERCÍCIO 03 ----------- </h3> <br>

> Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é:*

```
SELECT * FROM Actor
``` 

*Se quisermos limitar as colunas, devemos indicar assim logo após o operador SELECT. Abaixo, está uma query que retorna somente o ide o saláriode todos os atores*

```
SELECT id, salary from Actor 
``` 

> Agora, se quisermos colocar uma condição para retornar as linhas (entradas), devemos usar o operador WHERE e colocar a nossa condição que pode usar alguns operadores (=, !=, >, etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.*

```
SELECT id, name from Actor WHERE gender = "male"
``` 

a) *Escreva uma query que retorne todas as informações das atrizes*

```
SELECT * FROM Actor WHERE gender = "female";
``` 

b) *Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
``` 

c) *Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*

```
SELECT * FROM Actor WHERE gender = "invalid";
```
**RESPOSTA:**  retorna a primeira linha vazia.

*d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```
SELECT id, name, salary FROM Actor WHERE salary < 500000;
```

*e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*

```
SELECT id, nome from Actor WHERE id = "002";
```
**RESPOSTA:** gerou erro pois o select chama pela coluna nome e essa coluna não existe. O correto seria name.


<h3 align="center"> ----------- EXERCÍCIO 04 ----------- </h3> <br>

> Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"
- cujos salários são maiores do que R$300.000

```
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
*a) Explique com as suas palavras a query acima*

**RESPOSTA:** retorna todos as linhas onde o nome começa com A ou J e o salário é mairo que 300000

*b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*

```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000
``` 

*c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.*

```
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
``` 

*d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

``` 
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
``` 

<h3 align="center"> ----------- EXERCÍCIO 05 ----------- </h3> <br>

*Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)*

```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT(300) NOT NULL,
    release_date DATE NOT NULL,
    rating INT(10) NOT NULL
);
```

*Crie 4 filmes*

```
INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse VocÊ",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "002", 
  "Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"004",
    "Tropa de Elite",
    "Pressionado pela esposa a sair do batalhão, Rodrigo Nascimento procura um substituto. Ao mesmo tempo, dois amigos se candidatam ao curso de formação da Tropa de Elite.",
    "2007-10-05",
    10
);
```
<h3 align="center"> ----------- EXERCÍCIO 06 ----------- </h3> <br>

Escreva uma query que:

*a) Retorne o id, título e avaliação a partir de um id específico;*

```
SELECT id, name, rating FROM Movies WHERE id = "001";
``` 

*b) Retorne um filme a partir de um nome específico;*

```
SELECT * FROM Movies WHERE name LIKE "%tropa%";
``` 

*c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`*

```
SELECT id, name, sinopse FROM Movies WHERE rating >= 7;
``` 
<h3 align="center"> ----------- EXERCÍCIO 07 ----------- </h3> <br>

> Escreva uma query que:

*a) Retorna um filme cujo título contenha a palavra `vida`*

```
SELECT * FROM Movies WHERE name LIKE "%vida%";
```

*b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.*

```
SELECT * FROM Movies WHERE sinopse LIKE "%tempo%";
```

*c) Procure por todos os filmes que já tenham lançado*

```
SELECT * FROM Movies WHERE release_date <  current_date();
```

*d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.*

```
SELECT * FROM Movies WHERE release_date <  current_date() AND sinopse LIKE "%vida%" AND rating > 7;
```
