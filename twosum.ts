function twoSum(nums: number[], target: number): number[] {
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (i == j) continue;
      if (sum == target) {
        output = [i, j];
        break;
      }
    }
  }
  return output;
}

let nums = [2, 4, 11, 3];
console.log(twoSum(nums, 6));
