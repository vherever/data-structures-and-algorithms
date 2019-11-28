function result(a, b) {
    while(b !== 0) {
        let r = a;
        a = b;
        b = r % b;
    }
    return a;
}

console.log(result(8, 20));