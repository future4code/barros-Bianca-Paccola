import { casinoList } from "../src/funcstionsCasino/functions"
import { CasinoDTO, LOCATION, NACIONALITY, UserDTO } from "../src/model/casinoDTO"

describe("Testes para entrada no casino", () => {

  test.skip("Recebe 1 brasileiro apto para entrar no casino brasileiro", () => {
    const casino: CasinoDTO = {
      name: "Ás de copas",
      location: LOCATION.BRAZIL
    }
    const user: UserDTO = {
      name: "Bianca Paccola",
      age: 32,
      nacionality: NACIONALITY.BRAZILIAN
    }
    const result = casinoList(casino, [user])
    
    expect(result.brazilians.allowed).toEqual(["Bianca Paccola"])

  })

  test.skip("Recebe 1 americano apto para entrar no casino brasileiro", () => {
    const casino: CasinoDTO = {
      name: "Ás de copas",
      location: LOCATION.BRAZIL
    }
    const user: UserDTO = {
      name: "Ian Gilan",
      age: 21,
      nacionality: NACIONALITY.AMERICAN
    }
    const result = casinoList(casino, [user])
    
    expect(result.americans.allowed).toEqual(["Ian Gilan"])

  })

  test.skip("Recebe 2 usuários brasileiros e 2 americanos, todos com idade de 19, querem entrar em um estabelecimento nos EUA", () => {
    const users: UserDTO[] = [
      {
        name: "John Dee",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "Elize Martin",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
      },
      {
        name: "Amanda Sanches",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      },
      {
        name: "Eduardo Peixoto",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
      }
    ]
    const casino: CasinoDTO = {
      name: "Roulette",
      location: LOCATION.EUA
    }
    const result = casinoList(casino, users)

    expect(result.brazilians.unallowed).toEqual(["Amanda Sanches", "Eduardo Peixoto"])
    expect(result.americans.unallowed).toEqual(["John Dee", "Elize Martin"])
  })

  test.skip("Recebe 2 usuários brasileiros e 2 americanos. Os brasileiros tem 19 anos e os americanos tem 21 anos. Todos querem entrar em um Casino nos EUA", ()=>{
      const users: UserDTO[] = [
        {
          name: "Reginaldo Monteiro", 
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN
        },
        {
          name: "Maria Luiza", 
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN
        },
        {
          name: "William Bolt",
          age: 21,
          nacionality: NACIONALITY.AMERICAN
        },
        {
          name: "Mary Jane",
          age: 21,
          nacionality: NACIONALITY.AMERICAN
        }
      ]
      const casino: CasinoDTO = {
        name: "Atlantis Casino",
        location: LOCATION.EUA
      }
      const result = casinoList(casino, users)

      expect(result.americans.allowed).toEqual(["William Bolt", "Mary Jane"])
      expect(result.brazilians.unallowed).toEqual(["Reginaldo Monteiro","Maria Luiza"])
  })

  test("Recebe um brasileiro que pode entrar em um Casino no Brasil e deve verificar se a lista de aprovados brasileira é maior que 0 e menor que 2, ou seja, se tem só uma pessoa", ()=>{
    const brazilian: UserDTO = {
      name: "Miguel Ferraz", 
      age: 30,
      nacionality: NACIONALITY.BRAZILIAN
    }
    const casino: CasinoDTO = {
      name: "Casino Estoril", 
      location: LOCATION.BRAZIL
    }
    const result = casinoList(casino, [brazilian])

    expect(result.brazilians.allowed.length).toBeLessThan(2)
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
  })
})