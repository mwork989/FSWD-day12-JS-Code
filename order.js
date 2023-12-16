const orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
}
let totalOrders = 0;


for (let key in orderData) {
    totalOrders += orderData[key];
}
console.log("Total number of orders placed =", totalOrders);
const numberOfProportions = Object.keys(orderData).length;
console.log("Total number of order proportions =", numberOfProportions);


// [
//     { id: 1, order: "Below 500", orderPercentage: "10.05", restaurant: "Punjabi Tadka" },
//     { id: 2, order: "500-1000", orderPercentage: "14.57", restaurant: "Punjabi Tadka" },
//     { id: 3, order: "1000-1500", orderPercentage: "15.08", restaurant: "Punjabi Tadka" },
//     { id: 4, order: "1500-2000", orderPercentage: "22.11", restaurant: "Punjabi Tadka" },
//     { id: 5, order: "Above 2000", orderPercentage: "38.19", restaurant: "Punjabi Tadka" }
// ]
// solution 
//---------------
// Calculate the total number of orders.
// Iterate through each order range in orderData.
// Calculate the percentage of each order range.
// Format the result in the desired structure.

// Calculate the percentage of each order proportion
let orderPercentages = [];
let id = 1;

for (let key in orderData) {
    let percentage = (orderData[key] / totalOrders) * 100;
    orderPercentages.push({
        "id": id,
        "order": key,
        "orderPercentage": percentage.toFixed(2),
        "restaurant": "Punjabi Tadka"
    });
    id++
}

console.log("percentage of each proportion",orderPercentages);