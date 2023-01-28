const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 1, name: 'mobile', price: 5000 },
    { id: 1, name: 'watch', price: 30000 },
    { id: 1, name: 'tablet', price: 10000 },
]

const numbers = [11, 5, 23, 45, 11, 28, 9, 55, 60, 6, 1]
const fives = numbers.find(num => num % 6 === 0)
const fivesFilter = numbers.filter(num => num % 6 === 0)

console.log(fivesFilter);