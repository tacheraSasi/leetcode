export default function romanToInt(roman: string) {
  console.log("Roman", roman);
}

const romanNumerals: { [Key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
