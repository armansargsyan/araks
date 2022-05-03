export function getRandomPrices(): number {
  return 15000000 + Math.floor(Math.random() * 18000000);
}

export function getDaysCount(): number {
  return Math.floor(Math.random() * 5);
}
