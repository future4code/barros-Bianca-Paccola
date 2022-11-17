<div align="center">

# EXERCÍCIOS SOBRE RELAÇÕES EM SQL
## USANDO MySQL WORKBENCH

![mysql](./mysql-256.png)

</div>

<h2 align="center">------------ EXERCÍCIO 01 --------------</h2>

*a) Explique o que é uma chave estrangeira*

**RESPOSTA:** Uma coluna para criar relações entre diferentes tabelas.

*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Obra de arte do cinema brasileiro!",
    10.0,
    "005"
);
```

```
INSERT INTO Rating
VALUES (
	"004",
    "Foi impossível não rir com Dona Picucha",
    8,
    "002"
);
```

*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*

**RESPOSTA:** Não é possível criar uma relação com um id inexistente na tabela referenciada.

d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

```
ALTER TABLE Movie DROP COLUMN rating;
```

*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

**RESPOSTA:**  Gera um erro pois não é permitido apagar um item que já esteeja relacionado com outro item.

<h2 align="center">------------ EXERCÍCIO 02 --------------</h2>

> Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**
Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```sql
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

*a) Explique, com as suas palavras, essa tabela*

**RESPOSTA:** Ela pega uma FOREIGN KEY (ID) de cada uma das tabaelas para criar uma relação entre itens. Ex.: id do ator Antônio Fagundes que se está no elenco do filme com id 001; e posso ter outros atores referenciados no mesmo filme de id 001, assim como ter vários filmes referenciados a um ator.
É necessário criar uma tabela para relacionar quando se tem relações n:m (muitos para muitos).

*b) Crie, ao menos, 6 relações nessa tabela* 

```
INSERT INTO MovieCast
VALUES
	("001", "005"),
    ("001", "003"),
    ("002", "004"),
    ("005", "001"),
    ("003", "005"),
    ("002", "006");
```

*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

**RESPOSTA:** Não é possível relacionaor um item inexistente na tabela.

*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

**RESPOSTA:** Erro. Não é possível apagar um item que já tenha sido relacionado a outro item.

<h2 align="center">------------ EXERCÍCIO 03 --------------</h2>

> Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 
Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 

```sql
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*

**RESPOSTA:** Estabele uma condição para o Join.

*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

```
SELECT Movie.id, Movie.name, Rating.rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
<h2 align="center">------------ EXERCÍCIO 04 --------------</h2>

*a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário*

```
SELECT Movie.name, Movie.id, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

*b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator*

```
SELECT Movie.id, Movie.name, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

*c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)*

```
SELECT Movie.name, AVG(Rating.rate) FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY Movie.name;
```

<h2 align="center">------------ EXERCÍCIO 05 --------------</h2>

> Agora, para finalizar, vamos ver uma query com a nossa relação **M:N**. Nela, nós temos 3 tabelas envolvidas: `Movie`, `Actor` e `MovieCast`. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.
Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos **uma** das tabelas independentes (`Movie` e `Actor`) com a tabela de junção `MovieCast`, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:

```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
``` 

*a) Explique, com suas palavras essa query. Por que há a necessidade de dois `JOIN`?*

**RESPOSTA:** Porque retorna todas as informações de 3 tabelas, 2 que não tem ligações com uma que se liga com as 2.

*b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque `alias` para facilitar o endentimento do retorno da query*

```
SELECT m.id, m.name, a.id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

*c) A query abaixo **deveria** ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.*

```
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
``` 

**RESPOSTA:** Este código aprenseta os mesmo resultados que o código anterior, mas muda, apenas para fins de pesquisa e entendimento, os nomes das colunas dos id's.

*d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)*

```
SELECT Movie.name, Actor.name, Rating.rate, Rating.comment FROM Movie
LEFT JOIN Rating ON Rating.movie_id = Movie.id
JOIN Actor ON Actor.id = MovieCast.actor_id;
LEFT JOIN MovieCast ON Movie.id = MovieCast.movie_id
```


<h2 align="center">------------ EXERCÍCIO 06 --------------</h2>

> Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (`Óscar de melhor filme`,  `Óscar de melhor direção`, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.

*a) Que tipo de relação é essa?*

**RESPOSTA:** 1:n

*b) Explicite a query que você usou para criar a tabela*

```
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    oscar_name VARCHAR(255) NOT NULL,
	data DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```


*c) Crie ao menos 2 óscar para cada um dos filmes*

```
INSERT INTO Oscar
VALUES
("001", "Óscar de Melhor Direção",  "2005-09-10", "001"),
("002", "Óscar de Melhor Filme", "2005-09-10", "001"),
("003", "Óscar de Melhor Trilha Sonora", "2015-05-29", "002"),
("004", "Óscar de Melhor Filme", "2015-05-29", "002"),
("005", "ÓScar de Melhor Elenco", "2020-05-16", "003"),
("006", "Óscar de Melhor Direção", "2020-05-16", "003"),
("007", "Óscar de Melhor Enredo", "2017-03-10", "004"),
("008", "Óscar de Melhor Trilha Sonora", "2017-03-10", "004"),
("009", "Óscar de Melhor Fotografia", "2010-03-19", "005"),
("010", "Óscar de Melhor Roteiro Adaptado", "2010-03-19", "005");
```

*d) Faça uma query que retorne todos os filmes e seus respectivos óscar*

```
SELECT Movie.name, Oscar.oscar_name FROM Movie
LEFT JOIN Oscar ON Oscar.movie_id = Movie.id;
```
