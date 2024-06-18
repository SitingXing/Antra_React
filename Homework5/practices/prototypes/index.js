// sort
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
    {
        name: "Spongebob",
        age: 30,
        gpa: 3.0,
    },
    {
        name: "Patrick",
        age: 37,
        gpa: 1.5,
    },
    {
        name: "Squidward",
        age: 51,
        gpa: 2.5,
    },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);



// reduce
const items = [
    {name: "Rice", price: 5},
    {name: "Book", price: 20},
    {name: "Chicken", price: 10},
    {name: "Monitor", price: 100},
];

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price;
// });

items.reduce((total, item) => {
    console.log(total);
    console.log(item.price);
    return total + item.price;
}, 0)

console.log(totalPrice);


const result = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {});

console.log(result);


const numbers2 = [13, 2, 5];

const sum = numbers2.reduce((total, number, index, array) => {
    console.log(index);
    console.log(array);
    return total + number;
}, 0);
console.log(sum);