export default function romanToInt(roman: string) {
  console.log("Roman", roman);

  const s = roman.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = i + 1 < s.length ? s[i + 1] : 0;

    const currVal = romanNumerals[curr];
    const nextVal = romanNumerals[next];
  }
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
