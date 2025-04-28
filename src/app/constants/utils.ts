export function getRandomNumber(lowerBound: number, upperBound: number) {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}
