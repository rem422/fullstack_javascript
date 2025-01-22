//1. Logical AND (&&)
//True if both the operands/booleans value are true, else evaluates to FALSE.

const a = true;
const b = false;
const c = 4;

console.log(a && b); //false
console.log(c > 2 && c < 2); //false

//2. Logical OR (||)
//True if either the operands/booleans value is true, else evaluates to FALSE if both are false.

console.log(a || b); //true
console.log(b || b); //false
console.log(c > 2 || c < 2); //true

//3. Logical NOT (!)
// True if the operands is false and vice-versa.

console.log(!a); //false
console.log(!b); //true

let password = "rem-simiyu";

if (password.length >= 8 && password.includes('web')) {
    console.log('Valid password');
} else {
    console.log('Invalid password');
}

if (password.length >= 8 || password.includes('web')) {
    console.log('Valid password');
} else {
    console.log('Invalid password');
}

let isTrue = true;
console.log(!isTrue);


