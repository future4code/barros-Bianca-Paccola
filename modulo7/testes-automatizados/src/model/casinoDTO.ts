export enum LOCATION {
  //inputs
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
export interface UserDTO {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
export  interface CasinoDTO {
    name: string;
    location: LOCATION;
  }

//outputs  

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }