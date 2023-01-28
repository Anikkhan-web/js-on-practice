const numbers = [12, 5, 23, 45, 11, 18, 19, 55, 61, 1]
const bigNums = numbers.filter(num => num > 20)
const tinyNums = numbers.filter(num => num < 20)
const even = numbers.filter(num => num % 2 === 0)


const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 1, name: 'mobile', price: 5000 },
    { id: 1, name: 'watch', price: 30000 },
    { id: 1, name: 'tablet', price: 10000 },
]


const expensive = products.filter(product => product.price > 1000000)

console.log(bigNums);
console.log(tinyNums);
console.log(even);
console.log(expensive);