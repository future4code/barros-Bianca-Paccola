export interface userDto {
  name: string;
  userBalance: number;
}

export interface userInputPurchaseDTO {
  user: userDto;
  value: number;
}
