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

const arr = [1, 2, 3, 4, 5 - 1, -2, -3, -4];
const result = sumZero(arr);
console.log(result);

/**@author Dilshodbek Hamidov ,Nobody,17.05.2022,time 0.521 seconds 😱😱   */ 