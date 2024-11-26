function reverse(x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) ? 0 : reversed;
}
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(1534236469)); // Output: 0 (overflow)
