// Objects challenge

// Day 7

// Activity 1 : Object Creation and Access
// Task 1 ::
const book = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018
}
console.log(book)

// Task 2 ::
let bookTitle = book.title;
let bookAuthor = book.author;
console.log(bookTitle);
console.log(bookAuthor) 


// Activity 2 : Object Methods
// Task 3 ::
const book1 = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018,

    // create a function getInfo
    getInfoBook : function(){
        return `${book1.title} was written by ${book1.author}`
    },
}
console.log(book1.getInfoBook());

// Task 4 ::
const book2 = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018,

    yearUpdated : function(year){
        return this.year = year;
    },
}
console.log(book2.yearUpdated(2019))


// Activity 3 : Nested Objects
// Task 5 :: 
const library = {
    name: "CSE CourseWork",
    books: [
        {
            title: "Object Oriented Programming",
            author: "Grady Booch",
            year: 1991,
        },
        {
            title: "Introduction to Algorithms",
            author: "Thomas H. Cormen",
            year: 2009,
        },
        {
            title: "Design Patterns: Elements of Reusable Object-Oriented Software",
            author: "Erich Gamma",
            year: 1994,
        }
    ]
}
console.log(library)

// Task 6 ::
let libraryName = library.name;
console.log(libraryName);
for(let i=0; i<library.books.length; i++){
    console.log("Title : ",library.books[i].title);
}


// Activity 4 : The this keyword
// Task 7 ::
const book3 = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018,

    // create a function getInfo
    getInfoBook : function(){
        return `${this.title} was written by ${this.author}`
    },
}
console.log(book1.getInfoBook());


// Activity 5 : Object Iteration
// Create a book object
const book4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    pages: 281
  };

  for (let book in book4) {
    console.log(`${book}: ${book4[book]}`);
  }

// Task 9 ::
console.log(Object.keys(book4));
console.log(Object.values(book4))