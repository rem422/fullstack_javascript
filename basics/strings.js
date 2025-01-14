let firstName = 'Rem';
let lastName = "Simiyu";
const career = `Web Developer`;

console.log(firstName);
console.log(lastName);
console.log(career);

//String concatenation
let fullName = firstName + "  " + lastName;
console.log(fullName);

//Using template literals (ES6)
fullName = firstName.concat(lastName);
console.log(fullName);

//Append
// firstName += ' Jonas';
// console.log(firstName);

//length
console.log(firstName.length);

//cases
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

//Slice
console.log(firstName.slice(0, 3));

//Split & join
console.log(firstName.split());
console.log(firstName.split(''));
console.log(firstName.split('').join(''));

//includes
console.log(firstName.includes('R'));
console.log(firstName.includes('w'));

//trim
// console.log(firstName);
// console.log(firstName.trim());

//backticks
console.log(`My name is ${firstName} ${lastName} and I am a ${career}`);