//1. Create variable name (fruit) & store "Banana".
//2. if case is "Banana" print "Banana is good!".
//3. if case is "Orange" print "I am not a fan of Orange."
//4. if case is "Apple" print "How do you like them apples?"
//5. Default "I have never heard of that fruit."

let fruit = 'Banana';

switch (fruit) {
    case 'Banana':
        console.log("Banana is good!");
        break;
    case "Orange":
        console.log("I am not a fan of Oranges.");
        break;
    case "Apple":
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit.");
}
