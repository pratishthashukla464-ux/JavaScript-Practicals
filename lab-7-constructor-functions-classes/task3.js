
 // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 7, Task 3

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function () {
    if (this.marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
};

const student1 = new Student("Asha", 88);
console.log(student1.result());
