function quiz10(x, y) {

    if (y === 0) return 1;

    return x * quiz10(x, y - 1);

}