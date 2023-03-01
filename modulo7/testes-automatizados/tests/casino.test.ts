import { casinoList } from "../src/funcstionsCasino/functions";
import {
  CasinoDTO,
  LOCATION,
  NACIONALITY,
  UserDTO,
} from "../src/model/casinoDTO";

describe.skip("Testes para entrada no casino", () => {
  const casinoBra: CasinoDTO = {
    name: "Casino Ás de Copas",
    location: LOCATION.BRAZIL,
  };
  const casinoEua: CasinoDTO = {
    name: "Roullet",
    location: LOCATION.EUA,
  };

  test("Recebe 1 brasileiro apto para entrar no casino brasileiro", () => {
    const user: UserDTO = {
      name: "Bianca Paccola",
      age: 32,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const result = casinoList(casinoBra, [user]);

    expect(result.brazilians.allowed).toEqual(["Bianca Paccola"]);
  });

  test("Recebe 1 americano apto para entrar no casino brasileiro", () => {
    const user: UserDTO = {
      name: "Ian Gilan",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    const result = casinoList(casinoBra, [user]);

    expect(result.americans.allowed).toEqual(["Ian Gilan"]);
  });

  test("Recebe 2 usuários brasileiros e 2 americanos, todos com idade de 19, querem entrar em um estabelecimento nos EUA", () => {
    const users: UserDTO[] = [
      {
        name: "John Dee",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Elize Martin",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Amanda Sanches",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Eduardo Peixoto",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
    ];
    const result = casinoList(casinoEua, users);

    expect(result.brazilians.unallowed).toEqual([
      "Amanda Sanches",
      "Eduardo Peixoto",
    ]);
    expect(result.americans.unallowed).toEqual(["John Dee", "Elize Martin"]);
  });

  test("Recebe 2 usuários brasileiros e 2 americanos. Os brasileiros tem 19 anos e os americanos tem 21 anos. Todos querem entrar em um Casino nos EUA", () => {
    const users: UserDTO[] = [
      {
        name: "Reginaldo Monteiro",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "Maria Luiza",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
      },
      {
        name: "William Bolt",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
      {
        name: "Mary Jane",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
      },
    ];
    const result = casinoList(casinoEua, users);

    expect(result.americans.allowed).toEqual(["William Bolt", "Mary Jane"]);
    expect(result.brazilians.unallowed).toEqual([
      "Reginaldo Monteiro",
      "Maria Luiza",
    ]);
  });

  test("Recebe um brasileiro que pode entrar em um Casino no Brasil e deve verificar se a lista de aprovados brasileira é maior que 0 e menor que 2, ou seja, se tem só uma pessoa", () => {
    const brazilian: UserDTO = {
      name: "Miguel Ferraz",
      age: 30,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const result = casinoList(casinoBra, [brazilian]);

    expect(result.brazilians.allowed.length).toBeLessThan(2);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  });

  test("Recebe um usuário americano que possa entrar em um Casino no Brasil. Verifica se o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.", () => {
    const american: UserDTO = {
      name: "Alice James",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    const result = casinoList(casinoBra, [american]);

    expect(result.americans.unallowed.length).toBe(0);
  });

  test("Receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Retorna se os arrays unallowed possuam o nome de algum dos usuários que você criou", () => {
    const american: UserDTO = {
      name: "Allan Walks",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };
    const brasilian: UserDTO = {
      name: "Fabricio Oliveira",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const result = casinoList(casinoEua, [
      brasilian,
      brasilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowed).toContain("Fabricio Oliveira");
    expect(result.americans.unallowed).toContain("Allan Walks");
  });

  test("Recebe 2 usuários brasileiros e 2 americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2. ", () => {
    const american: UserDTO = {
      name: "Allan Walks",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    const brasilian: UserDTO = {
      name: "Fabricio Oliveira",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const result = casinoList(casinoEua, [
      american,
      american,
      brasilian,
      brasilian,
    ]);

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toEqual(2);
  });
});
