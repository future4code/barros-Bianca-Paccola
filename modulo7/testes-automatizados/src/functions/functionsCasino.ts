import {
  CasinoDTO,
  LOCATION,
  NACIONALITY,
  Result,
  UserDTO,
} from "../model/casinoDTO";

export const casinoList = (casino: CasinoDTO, users: UserDTO[]): Result => {
  let allowed: UserDTO[] = [];
  let unallowed: UserDTO[] = [];

  for (let user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    }
  }

  const brazilians = {
    allowed: allowed
      .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
      .map((user) => user.name),

    unallowed: unallowed
      .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
      .map((user) => user.name),
  };

  const americans = {
    allowed: allowed
      .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
      .map((user) => user.name),

    unallowed: unallowed
      .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
      .map((user) => user.name),
  };

  return { brazilians: brazilians, americans: americans };
};
