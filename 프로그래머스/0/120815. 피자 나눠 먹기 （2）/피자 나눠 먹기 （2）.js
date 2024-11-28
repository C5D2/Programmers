function solution(n) {
    const n2 = 6;
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    return n / gcd(n, n2);
}