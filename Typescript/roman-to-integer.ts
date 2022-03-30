function romanToInt(s: string): number {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = sym[s[i]];
        const next = sym[s[i + 1]];
        if (current < next) {
            result += next - current;
            i++
        } else {
            result += current;
        }
    }
    return result;
};
/*03/30/2022 09:54	Accepted	185 ms	47.7 MB	typescript
/*@Author  Dilshodbek Hamidov// Solved in  Davr Bank
*/