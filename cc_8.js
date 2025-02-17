// Task 1- Function Declaration
function calculateSalary (baseSalary,bonus, taxRate) {
let taxAmount = baseSalary * taxRate; // calulating the tax amount based on the salary 
let netSalary = (baseSalary + bonus)-taxAmount; // net salary + the bonus - tax
return `netSalary: $${netSalary.toFixed(2)}`; // formating the net salary 
}
// Test Data
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); //Expected output: "Net Salary: $6950.00"

// Task 2- Function Expression 
const calculatedDiscount= function (price, discountRate) {
    let discountAmount= price * discountRate; // calculating the discount amount 
    let finalPrice= pricerice-discountAmount; // subtracting amount from the original price 
    return `Final Price : $${finalPrice.toFixed(2) }`;// returning the formatted final price
};
// Test Data
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15));// Expected output: "Final Price: $212.50"

// Task 3: Arrow Function 
 const calculateServiceFee = (amount,servicesType)=> {
    let feeRate;
    if (serviceType ==="Premium") { 
        feeRate= 0.15;// 15 % of the amount 
     } else if (serviceType === "Standars" ){
        feeRate= 0.10 ; // 10 % of the amount
     } else if (serviceType=== "Basic") {
        feeRate = 0.05; // 5% of the amount 
     } else {
    return "Invalid service Type"; // incase of any incorrect inputs 
 }
let serviceFee= amount * feeRate; // Calculating the service fee 
return `Service Fee: $${serviceFee.Fee.toFixed(2)}`;
 };
// Test Data: 
console.log(calculateServiceFee(200, "Premium")); //Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); //Expected output: "Service Fee: $50.00"
// Task 4: Parameters and Arguments 






// Task 5: Returning Values 







// Task 6- Higher-order function






// Task 7- Closure 




// Task 8: Recursion in JavaScript 