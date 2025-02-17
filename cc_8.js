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





// Task 4: Parameters and Arguments 






// Task 5: Returning Values 







// Task 6- Higher-order function






// Task 7- Closure 




// Task 8: Recursion in JavaScript 