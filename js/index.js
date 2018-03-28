// let greet = 'Hello World!';
// alert(greet);
// greet = 'Goodbye';
// alert(greet);

// // String
// const someName = 'Jon';

// // Number
// const age = 42.5;

// // Boolean
// const married = true; // false

// // undefined
// //const notDefined = undefined;
// let notDefined;  

// // null
// const empty = null;

// // Object
// const someObj = {};

// // Symbol
// const someSym = Symbol();

const user = prompt('Enter your name');
document.write('Hello ' + user);
document.write('<br>');

const age = parseFloat(prompt('Enter your age'));
const nextAge = addOne(age);
document.write('You are ' + checkAge(age));
document.write('Next year you will be ' + nextAge);


function addOne(arg) {
    const result = arg + 1;
    return result;
}

function checkAge(age) {
    if ( (age >= 18) && (age <= 70) ){
        return 'Adult';
    } else if (age > 70) {
        return 'Old';
    } else {
        return 'Child';
    }
}