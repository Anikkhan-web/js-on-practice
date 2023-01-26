function add(first, second = 0) {
    // if (second === undefined) {
    //     second = 0;
    // }
    // second = second || 0

    const total = first + second;
    return total;
}
const result = add(20)
console.log(result);