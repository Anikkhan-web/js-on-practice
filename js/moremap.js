const numbers = [12, 56, 87, 44]

const half = numbers.map(n => n / 2)
// console.log(half);

const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 1, name: 'mobile', price: 5000 },
    { id: 1, name: 'watch', price: 30000 },
    { id: 1, name: 'tablet', price: 10000 },
]

// const items = products.map(product => console.log(product.name))
const items = products.map(product => product.name)
const prices = products.map(p => p.name)

console.log(items);