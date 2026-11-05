 // Name:pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 11, Task 2

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
