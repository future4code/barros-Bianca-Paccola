<div align="center">

# Exercícios de aprofundamento em linguagem SQL usando MySQL Workbench

![logospng](./mysql-256.png)

</div>

<h3 align="center"> ----------- EXERCÍCIO 01 ----------- </h3> </br>

> *Leia os comandos abaixo e indique o que eles fazem. **Não os rode nas tabelas desse projeto os comandos dos exercícios a até c desta questão!** Explique o que elas fariam **se fossem** rodadas.*

a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

**RESPOSTA:** Remova a coluna salary da tabela Actor

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

**RESPOSTA:** Muda o nome da coluna 'gender' para 'sex' e o tipo de dado da coluna tmbm.

c) **

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

**RESPOSTA:** Muda apenas o formato dos dados da coluna gender, mas mantém o mesmo nome.

*d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres*

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
``` 


<h3 align="center"> ----------- EXERCÍCIO 02 ----------- </h3> </br>

*a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003*

```
UPDATE Actor
SET
name = "Tarcísio Meira", 
birth_date = "1935-10-5"
WHERE id = "001";
``` 

*b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.*

```
UPDATE Actor
SET
name = "JULIANA PAES"
WHERE id = "004";

UPDATE Actor
SET
name = "Juliana Paes"
WHERE id = "004";
```

*c) Escreva uma query que atualize todas as informações do ator com o id 005*

```
UPDATE Actor
SET
name = "Renata Sorrah",
salary = 150000,
birth_date = "1947-02-21",
gender = "female"
WHERE id = "005";
```

*d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. *

**RESPOSTA:** Não exibe mensagem de erro, mas diz que não houve mudanças: Matched: 0 , Changed: 0.

<h3 align="center"> ----------- EXERCÍCIO 03 ----------- </h3> </br>

*a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro*

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

*b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00*

```
DELETE FROM Actor WHERE gender = "male" and  salary > 1000000;
``` 


<h3 align="center"> ----------- EXERCÍCIO 04 ----------- </h3> </br>

*a) Escreva uma query que pegue o maior salário de todos os atores e atrizes*

```
SELECT MAX(salary) FROM Actor;
```

*b) Escreva uma query que pegue o menor salário das atrizes*

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

*c) Escreva uma query que pegue a quantidade de atrizes*

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
``` 

*d) Escreva uma query que pegue a soma de todos os salários*

```
SELECT SUM(salary) FROM Actor;
```

<h3 align="center"> ----------- EXERCÍCIO 05 ----------- </h3> </br>

> O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`)

```sql
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
```

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
*RESPOSTAS:* Faz a contagem e agrupa por genêro. Ex.: 6 female, 4 male.

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

```
SELECT id, name FROM Actor ORDER BY name DESC;
``` 

*c) Faça uma query que retorne todas as pessoas atoras ordenados pelo salário*

```
SELECT * FROM Actor ORDER BY salary ASC;
``` 

*d) Faça uma query que retorne atrizes com os três maiores salarios*

```
SELECT * FROM Actor
WHERE gender = "female"
ORDER BY salary DESC 
LIMIT 3;
```

*e) Faça uma query que retorne a média de salário por gênero*

```
SELECT AVG(salary) FROM Actor GROUP BY gender;
```

<h3 align="center"> ----------- EXERCÍCIO 06 ----------- </h3> </br>

*a) Altere a tabela de `Movies` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*

```
ALTER TABLE Movie ADD playing_limit_date DATE;
UPDATE Movie SET playing_limit_date = DATE_ADD(release_date, INTERVAL 90 DAY);
ALTER TABLE Movie MODIFY playing_limit_date DATE NOT NULL;
```
* O código acima cria a coluna do tipo data vazia, seta para os registros já existentes com a data de lançamento do filme + 90 dias que é a média máxima que um filme pode ficar em cartaz e depois modifica o tipo para não aceitar campo vazio (not null).

*b) Altere a tabela de Movies para que o parâmetro avaliação torne-se rating e possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.*

```
ALTER TABLE Movie MODIFY rating FLOAT NOT NULL;
``` 

*c) Atualize dois filmes de tal forma que tenhamos um  ainda esteja em cartaz, e outro que já tenha saído*

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "006", 
  "Carandiru: O Filme",
  "Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação",
  "2003-04-11", 
  8.5
);

INSERT INTO Movie (id, name, synopsis, release_date, rating, playing_limit_date)
VALUES(
  "007", 
  "45 do Segundo Tempo",
  "Pedro marca um encontro com seus melhores amigos do colégio depois de 40 anos sem vê-los. O convite para recriar uma foto tirada por eles no dia da inauguração do metrô de São Paulo é, na realidade, um pretexto para avisá-los de que ele pretende se matar, mas não antes de ver seu time, o Palmeiras, ser campeão.",
  "2022-08-18", 
  8.5,
  "2023-02-15"
);
```

*d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

**RESPOSTA:** Não gerou erro, mas retornou que não houve nenhuma alteração -> matched:0, changed: 0.

