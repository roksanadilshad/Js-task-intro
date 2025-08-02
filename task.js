let moneyGiven = 1000;

let orangePrice = 100;
let applePrice = 200;

let orangeQty = 3;
let appleQty = 2;

let totalCost = (orangePrice * orangeQty) + (applePrice * appleQty);
let takenMoney = (moneyGiven-totalCost)
 
console.log("Money returned by shopkeeper:", takenMoney + "taka");

