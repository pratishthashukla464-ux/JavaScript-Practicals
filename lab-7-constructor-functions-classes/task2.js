
 // Name: Pratishtha Shukla
 // Roll No.: 2650303024
 // Assignment: 7, Task 2

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

const book1 = new Book("Algorithms", 320);
console.log(book1.summary());
