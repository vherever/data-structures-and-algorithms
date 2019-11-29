function fact(n) {
    return n >= 1 ? n * fact(n - 1) : 1;
}

console.log('fact', fact(4)); // 24