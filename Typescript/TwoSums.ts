function twoSums(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length, i++;) {
        for (let j = i + 1; j < numbers.length, j++;) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j]
            }
        }
    }
}
/*03/30/2022 144 ms	44.6 MB	typescript
/*@Author  Dilshodbek Hamidov //Solved in Davr bank
*/