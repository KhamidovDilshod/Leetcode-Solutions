function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === 0) {
            // return { left: arr[left], right: arr[right] }
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// const arr = [1, 2, 3, 4, 5 - 1, -2, -3, -4];
// const result = sumZero(arr);
// console.log(result);

/**@author Dilshodbek Hamidov ,Nobody,17.05.2022,time 0.521 seconds 😱😱   */



const memoization = (value) => {
    let cache = {};
    if (value in cache) {
        return cache[value]
    } else {
        let result = value * value;
        cache[result] = result;
        return result;
    }
}
const simple = (value) => {
    return value * value;
}
// const test = memoization(1000);//=>time 0.11 seconds with
// const sim = simple(1000);//=>time 0.12 seconds
/**@author Dilshodbek Hamidov,currently Nobody,17.05.2022 in Davr Bank*/


const maxSubArray = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
const result = maxSubArray([12, 3, 4, 2, 3, 4, 5, 6, 9, 0, 6, 5, 7, 4, 2, 11, 6], 3);
console.log(result);