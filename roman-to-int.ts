export default function romanToInt(roman: string) {
  console.log("Roman", roman);

  let result = 0;
  const s = roman.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = i + 1 < s.length ? s[i + 1] : 0;

    const currVal = romanNumerals[curr];
    const nextVal = next != 0 ? romanNumerals[next] : 0;
    console.log("Current", curr, "Next", next, "Current Value", currVal, "Next Value", nextVal);
    
    if( currVal < nextVal){
      result -= currVal;
    } else {
      result += currVal;
    }
  }
  return  result
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



//usage
console.log(romanToInt("IV"));