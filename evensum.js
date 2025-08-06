// Subtask-2:

// Display sum of all the even numbers from 51 to 85.

let evenNumbers = [];
let sum = 0;

for(let i = 51; i<= 85; i++){
    if(i % 2 == 0){
       console.log(i);
         evenNumbers.push(i);
        sum +=i;
        console.log(sum);
    }
}

console.log("even numbers from 51 to 85: ");
console.log(evenNumbers);

console.log("sum of all even numbers from 51 to 85: ");
console.log(sum);