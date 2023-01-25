export const checkTypeString = (object: any): boolean => {
  const values = Object.values(object);
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "string") {
      return false;
    }
  }
  return true;
};
