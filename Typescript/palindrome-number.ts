function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }

    let numb = x
    let reverseNum = 0

    while (numb > 0) {
        let lastDigit = numb % 10
        reverseNum = reverseNum * 10 + lastDigit
        numb = Math.floor(numb / 10)
    }

    return reverseNum === x
}
/*03/30/2022 13:44	Accepted	287 ms	51.3 MB	typescript
/*@Author  Dilshodbek Hamidov //Solved in Davr bank
*/