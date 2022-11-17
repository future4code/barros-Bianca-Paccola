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