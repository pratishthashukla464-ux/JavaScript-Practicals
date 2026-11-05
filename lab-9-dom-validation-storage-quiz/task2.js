// Name: Pratishtha Shukla //
// Roll No.: 2650303024 //
// Assignment: 9, Task 1 //

function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
