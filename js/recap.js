const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

function calculateSalary(salary, tax = 0.25, bonus = 0) {

    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total

}

const users = [{ id: 1, name: 'abul', job: 'doctor' }]
console.log(users[0].name);