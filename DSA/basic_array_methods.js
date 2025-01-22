const fruits = ['apple', 'pomegranate', 'mango', 'strawberries', 'pineapples', 'grapefruit'];

console.log(fruits);

fruits.push('banana');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('orange');
console.log(fruits);


const newFruits = ['kiwi', 'watermelon', 'peach'];

const totalFriuts = fruits.concat(newFruits);
console.log(totalFriuts);

const pl = ['JavaScript', 'Golang', 'Python', 'PHP'];
const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl.join(' - '));
console.log(pl.reverse());
console.log(pl.slice(0, 2));
console.log(numbers.sort());
