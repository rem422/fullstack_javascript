//1. Create variable name (favActorFirtName) & store your favourite actor's last name.
//2. Create variable name (favActorLastName) & store your favourite actor's last name.
//3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName).
//4. Create variable name (uppercase) & Capitalize your fav actor's name.
//5. Create variable name (message) & store `My favourite actor is (fullName) & say something about your favourite actor`, name should be in UPPERCASE.
//6. Now append this message to the (message variable) `his best show is Selina`.
//7. Now Log your Message.

let favActorFirtName = 'Pascal';
let favActorlastName = 'Tokodi';
let fullName = favActorFirtName + ' ' + favActorlastName;
let uppercase = fullName.toUpperCase();
let message = `My favourite Actor is ${uppercase} and He is one of the best Actors in town,`;
message += ` His best show is Selina.`;
console.log(message);