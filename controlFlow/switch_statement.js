let x = 0;
let bulb;

switch(x) {
    case 0:
        bulb = 'off'
        console.log(bulb);
        break;
    case 1:
        bulb = 'on'
        console.log(bulb);
        break;
    default:
        bulb = 'not working';
        console.log(bulb);
}

let day = 'Sunday';

switch(day) {
    case 'Sunday':
        console.log('Today is Sunday');
        break;
    case 'Monday':
        console.log('Today is Monday');
        break;
    case 'Tuesday':
        console.log('Today is Tuesday');
        break;
    case 'Wednesday':
        console.log('Today is Wednesday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'Friday':
        console.log('Today is Friday');
        break;
    case 'Saturday':
        console.log('Today is Saturday');
        break;
    default:
        console.log("Don't know what day is today");
}