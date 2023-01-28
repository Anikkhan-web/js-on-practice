const max = Math.max(12, 23, 45, 65, 878)

const numbers = [12, 23, 45, 65, 878]

const largest = Math.max(...numbers)
// console.log(...numbers)
// console.log(largest);

const fish = {
    name: 'king hilsa',
    color: 'silver'
}
// const name = fish.name;


// const { age, name } = { name: 'anik', age: 28, profession: 'web-developer' }
const { color } = fish

console.log(color);

const doubleIt = num => num * 2
const makeDouble = numbers.map(num => num * 2)

console.log(makeDouble);