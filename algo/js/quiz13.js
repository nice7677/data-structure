function quiz13(x){

    if (x === 0) return 0;

    return (x + quiz13(x - 1));

}

console.log(quiz13(6))