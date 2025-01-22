const person = {
    firstName: 'Rem',
    lastName: 'Simiyu',
    age: 25,
    city: 'Nakuru',
    isProgrammer: true,
}

console.log(person);

//Accessing object properties
//dot notation
console.log(person.firstName);
//bracket notation
console.log(person['lastName']);

//Adding new properties to an object
person.email = 'remsimiyu@gmail.com';
console.log(person);

//Deleting existing properties
delete person.age;
console.log(person);

