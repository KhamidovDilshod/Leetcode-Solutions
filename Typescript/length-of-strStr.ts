function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) return 0;

    if (needle === haystack) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }

    return -1;
}; 
/**
 * 03/30/2022 12:42	Accepted	90 ms	44.3 MB	typescript
 * @Author Dilshodbek Hamidov 
 */