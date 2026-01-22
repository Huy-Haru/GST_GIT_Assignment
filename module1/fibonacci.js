function Fibonacci(n, flag) {
    if (!flag) return -1;
    if (n <= 1) return n;
    return Fibonacci(n - 1, true) + Fibonacci(n - 2, true);
}

module.exports = Fibonacci;
