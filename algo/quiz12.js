function productOfArray(array) {

    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];

    let x = 1;

    for (let i = 0; i < array.length; i++) {

        x = x * array[i];

    }

    return x;

}