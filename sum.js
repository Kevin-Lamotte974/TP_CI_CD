function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

//  Version dev -> main test 3

module.exports = sum;