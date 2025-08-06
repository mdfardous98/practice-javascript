/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var interestRate = 5;
var simpleInterest = 1 + interestRate/100;

var currentSalary = startingSalary*simpleInterest**experience

currentSalary =currentSalary.toFixed(2);
console.log(currentSalary);