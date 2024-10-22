function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

//  Version dev -> main

module.exports = sum;