/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let total_spend = {}
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i]['category'];
    let price = transactions[i]['price'];
    // console.log(category,price);
    if (category in total_spend) {
      total_spend[category] += price;
    }
    else {
      total_spend[category] = price;
    }
  }
  let result = [];
  for (let category in total_spend) {
    console.log(category);
    result.push({ category: category, totalSpent: total_spend[category] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
