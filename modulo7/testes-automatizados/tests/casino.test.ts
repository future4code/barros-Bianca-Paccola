import { casinoList } from "../src/funcstionsCasino/functions"
import { CasinoDTO, LOCATION, NACIONALITY, UserDTO } from "../src/model/casinoDTO"

describe("Testes para entrada no casino", () => {

  test("1 brasileiro apto para entrar no casino brasileiro", () => {
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
})