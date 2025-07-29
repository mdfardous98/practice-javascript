/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 20;
// let num2 = 15;

// let result;

// if(num1 > num2){
//     console.log(result = num1*2);
// }else {
//     console.log(result = num1 + num2);
// }
// console.log("Result:",result);

/* ternary===
 The ternary version does the same in one line:
(condition) ? true_case : false_case */

let num1 = 45;
let num2= 35;

let result = (num1 > num2) ? num1*2 : num1 + num2;
console.log("Result:",result);