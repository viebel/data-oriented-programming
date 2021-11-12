function nthDigit(a, n) {
    return Math.floor((a / (Math.pow(10, n - 1)))) % 10;
}
