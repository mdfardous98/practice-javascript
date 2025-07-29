/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let ticketPrice = 800;
let age = 15;
let finalPrice;


    if (age < 10){
        console.log("Ticket price: Free");
    }else if ((age >= 15) && (age <= 25)){
        finalPrice = ticketPrice * 0.5;
            console.log("student Ticket Price: ", finalPrice, "tk");
    }else if (age >= 60){
        finalPrice = ticketPrice * 0.85;
        console.log("senior Citizen Ticket Price: ", finalPrice, "tk");
    }

else {
    console.log("Regular Ticket Price: ", ticketPrice, "tk");
}

    

