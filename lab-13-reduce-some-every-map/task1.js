
 // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 13, Task 1

const prices = [120, 45, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);
