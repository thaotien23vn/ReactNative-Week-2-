// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Function to calculate the tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// Test data
const bills = [125, 555, 44];

// Calculating tips for each bill
const tips = bills.map(bill => calcTip(bill));

// Calculating total amounts (bill + tip) for each bill
const total = bills.map((bill, index) => bill + tips[index]);

// Output the results
console.log('Bills:', bills);       // Output: [125, 555, 44]
console.log('Tips:', tips);         // Output: [18.75, 111, 8.8]
console.log('Total:', total);       // Output: [143.75, 666, 52.8]
