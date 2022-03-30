function lengthOfLastWord(s: string): number {
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1].length : 0;
};
/*03/30/2022	111 ms	42.8 MB	typescript
/*@Author  Dilshodbek Hamidov
*/