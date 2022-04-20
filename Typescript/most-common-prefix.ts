function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    if (strs === null || strs.length === 0) {
        return prefix;
    }
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix = prefix + char;
    }
    return prefix
}
/*03/29/2022 19:00	Accepted	120 ms	45 MB	typescript 
/*@Author  Dilshodbek Hamidov // Solved in Davr bank
*/