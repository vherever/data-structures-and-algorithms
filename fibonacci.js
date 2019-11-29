function fib(n) {
    return n >= 3 ? fib(n - 1) + fib(n - 2) : 1;
}

console.log('fib', fib(4)); // 3