CREATE TABLE User_Arq_testes(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) DEFAULT "NORMAL"
);

INSERT into User_Arq_testes
VALUES("4225596", "Bianca Paccola", "bianca@email.com", "123abc", "ADMIN");