function nthDigit(a, n) {
  console.log(a);
  console.log(n);
  return Math.floor((a / (Math.pow(10, n - 1)))) % 10;
}
