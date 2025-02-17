// Task 1- Function Declaration
function calculateSalary (baseSalary,bonus, taxRate) {
let taxAmount = baseSalary * taxRate; // calulating the tax amount based on the salary 
let netSalary = (baseSalary + bonus)-taxAmount; // net salary + the bonus - tax
return `netSalary: $${netSalary.toFixed(2)}`; // formating the net salary 
}
    // Test Data:
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); //Expected output: "Net Salary: $6950.00"

// Task 2- Function Expression 
const calculatedDiscount= function (price, discountRate) {
    let discountAmount= price * discountRate; // calculating the discount amount 
    let finalPrice= price-discountAmount; // subtracting amount from the original price 
    return `Final Price : $${finalPrice.toFixed(2) }`;// returning the formatted final price
};
    // Test Data :
    console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
    console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function 
 const calculateServiceFee = (amount,serviceType)=> {
    let feeRate;
    if (serviceType ==="Premium") { 
        feeRate= 0.15;// 15 % of the amount 
     } else if (serviceType === "Standard" ){
        feeRate= 0.10 ; // 10 % of the amount
     } else if (serviceType=== "Basic") {
        feeRate = 0.05; // 5% of the amount 
     } else {
    return "Invalid service Type"; // incase of any incorrect inputs 
 }
let serviceFee= amount * feeRate; // Calculating the service fee 
return `Service Fee: $${serviceFee.toFixed(2)}`;
 };
    // Test Data: 
console.log(calculateServiceFee(200, "Premium")); //Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); //Expected output: "Service Fee: $50.00"


// Task 4: Parameters and Arguments 
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate;

    // Dertemining the cost depending on the car 
    if (carType === "Economy") {
        dailyRate = 40; // Economy costs 40 per day
    } else if (carType === "Standard") {
        dailyRate = 60; // Standard costs 60 per day
    } else if (carType === "Luxury") {
        dailyRate = 100; // Luxury costs 100 per day
    } else {
        return "Invalid car type"; // If car type isn't valid, it will return as error 
    }

    let totalCost = days * dailyRate;  // Calculating  the base cost

    // Adding  insurance cost if applicable
    if (insurance) {
        totalCost += days * 20; // Insurance cost an extra 20 per day 
    }


    return `Total Rental Cost: $${totalCost.toFixed(2)}`;
}     // total rental cost

// Test Data : 
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"


// Task 5: Returning Values 
 function calculateLoanPayment (principal,rate,time) {
    let interest= principal*rate*time ; // calculating the interest 
    let totalPayment=principal + interest; // addinf interest to the principal 
    return`Total Payment: $${totalPayment.toFixed(2)}`; //formating the total to 2nd decimal place
 }

 // Test Date 
 console.log(calculateLoanPayment(1000, 0.05, 2));// Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6- Higher-order function
let transactions = [200, 1500, 3200, 800, 2500]; 
const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction); // Using filter () to find transactions above 1000
}; 
  // Test Data :
console.log(filterLargeTransactions(transactions, amount => amount > 1000)) ; // Expected output: [1500, 3200, 2500]

// Task 7- Closure 
function createCartTracker() { 
    let total=0 ; // Starting with an initial value at 0 
    return function (price) { 
        total += price; 
        return`Total Cart Value: $${total.toFixed(2)}`;
    };
}
let cart = createCartTracker ();  // tracking iteams and total 
 // Test Data : 
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8: Recursion in JavaScript 
function calculateSavings(years, amount ) {
    //  Each year it will increase savings by 5 % until it reaching 10yr
    if (years >= 10) {
        return `Projected amount: $${amount.toFixed(2)}`;
    }
    // Increase amount by 5% each year
    return calculateSavings(years + 1, amount * 1.05);
} 
 // Test Data: 
 console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
 console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $6381.41"