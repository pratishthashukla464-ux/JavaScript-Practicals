 // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 14, Task 3

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);

  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
