function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const cd = gcd(numer, denom);
  const answer = [numer / cd, denom / cd]
  return answer;
}