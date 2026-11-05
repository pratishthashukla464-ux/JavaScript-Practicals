
 // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 12, Task 1

function applyTwice(func, value) {
  return func(func(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));
