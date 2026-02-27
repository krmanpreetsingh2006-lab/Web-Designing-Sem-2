// {var a = 20;
// var a = 30;
// console.log(a);} // Output: 30
// console.log(a); // Output: 30
// {let a = 20;
// a = 40; 
// console.log(a);} // Output: 40
// const a = 20;
// a = 30; // This will throw an error because 'a' is a constant
// console.log(a); // Output: 20
//operators in JavaScript
// let a = 20;
// let b = 10;
// console.log(a + b); // Output: 30
// console.log(a - b); // Output: 10
// console.log(a * b); // Output: 200
// console.log(a / b); // Output: 2
// console.log(a % b); // Output: 0
// console.log(a++); // Output: 20 (post-increment, returns the value before incrementing)
// console.log(++a); // Output: 22 (pre-increment, increments first then returns the value)
// console.log(a--); //output: 22 (post-decrement, returns the value before decrementing)
// console.log(--a); // Output: 20 (pre-decrement, decrements first then returns the value)
// comparison operators : (==, ===, !=, !==, >, <, >=, <=)
// let a = 45;
// let b = "45";
// console.log(a == b); // Output: true (loose equality, checks value only)
// console.log(a === b); // Output: false (strict equality, checks value and type)
// console.log(a != b); // Output: false (loose inequality, checks value only)
// console.log(a !== b); // Output: true (strict inequality, checks value and type)
// console.log(a > b); // Output: false (compares values, '45' is converted to 45)
// console.log(a < b); // Output: false (compares values, '45' is converted to 45)
// console.log(a >= b); // Output: true (compares values, '45' is converted to 45)
// console.log(a <= b); // Output: true (compares values, '45' is converted to 45)
// assignment operators : (=, +=, -=, *=, /=, %=)
// let a = 10;
// a += 5; // Equivalent to a = a + 5
// console.log(a); // Output: 15
// a -= 3; // Equivalent to a = a - 3
// console.log(a); // Output: 12
// a *= 2; // Equivalent to a = a * 2
// console.log(a); // Output: 24
// a /= 4; // Equivalent to a = a / 4
// console.log(a); // Output: 6
// a %= 3; // Equivalent to a = a % 3
// console.log(a); // Output: 0
// logical operators : (&&, ||, !)
// let a = 24;
// let b = 30;
// console.log(a > 20 && b > 25); // Output: true (both conditions are true)
// console.log(a < 20 || b > 25); // Output: true (at least one condition is true)
// console.log(!(a < 20)); // output : true (negation of false is true)
// // concatenation operator : (+)
// let str1 = "Hello";
// let str2 = "world!";
// let result = str1 + " " + str2;
// // console.log(result); // Output: "Hello world!"
// // ternary operator : (condition ? expressionIfTrue : expressionIfFalse)
// let age = 18;
// let message = (age >= 18) ? "You are an adult." : "No, you cannot vote.";
// console.log(message); // Output: "You are an adult."
// // conditional statements : (if, else if, else,switch-case)
// // if (condition){
// //     // code to be executed if condition is true
// // }
// // else if (anotherCondition){
// //     // code to be executed if anotherCondition is true
// // }
// // else {
// //     // code to be executed if both conditions are false
// // }
// // // Example:
// let age = 25;
// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age < 65) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior.");
// }
// switch-case statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

