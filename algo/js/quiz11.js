function quiz11(x) {

    if (x < 0) return 0;
    if (x <= 1) return 1;

    return x * quiz11(x - 1);

}

console.log(quiz11(2))
console.log(quiz11(4))
console.log(quiz11(7))