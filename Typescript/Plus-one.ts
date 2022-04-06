function PlusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift();
    return digits;
}
/**
 * @author Dilshodbek Hamidov @Date 04/06/2022 10:50 @Time 73 ms	@Memory 42.8 MB	@Language typescript
 */