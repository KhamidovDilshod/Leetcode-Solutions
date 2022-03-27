function twoSums(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length, i++;) {
        for (let j = i + 1; j < numbers.length, j++;) {
            if (numbers[i] + numbers[j] == target) {
                return [i,j]
            }
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6];
const result = twoSums(arr, 3);
console.log(result);