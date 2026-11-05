  // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 8, Task 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

const teacher1 = new Teacher("Anita", "Maths");
console.log(teacher1.greet());
