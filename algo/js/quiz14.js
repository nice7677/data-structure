function quiz14(x) {
    if (x <= 2) return 1;
    return quiz14(x - 1) + quiz14(x - 2);
}

console.log(quiz14(4))

// 1, 1, 2, 3, 5, 8, ...
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465