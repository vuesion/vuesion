export const getIntInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getFloatInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
