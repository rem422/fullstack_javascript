//1. Create variable name (password) store nothing.
//2. if password is equal to 8 print "welcome".
//3. if password is less than or equal to 8 print "Password is too short".
//4. if password is greater than or equal to 8 print "Too Long Password" & "Password should be 8 characters".
//4. if all fails print "Please provide a password".

let password;

if (password === 8) {
    console.log('Welcome');
} else if (password <= 8) {
    console.log("Password is too short");
} else if (password >= 8) {
    console.log("Too Long Password");
    console.log("Password should be 8 characters");
} else {
    console.log("Please provide a password");
}