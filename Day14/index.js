// Class challenge

// Day 14

// Activity 1 : Class Definition
// Task 1 ::
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const p1 = new Person('John', 29);
p1.greet()
console.log(p1);

// Task 2 ::
class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
    updateAge(age){
        this.age = age;
        console.log("Age Updated");
    }
}

let p2 = new Person1('Alice', 20);
p2.greet();
console.log(p2);
p2.updateAge(21);
p2.greet()



// Activity 2 : Class Inheritance
// Task 3 ::
class Student1 extends Person{

    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    showStudentID(){
        console.log(`My Student ID is ${this.studentId}`);
    }

}

let student1 = new Student1("John", 21, "21BCP002");
console.log(student1);
student1.showStudentID()

// Task 4 ::
class Student2 extends Person{

    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    showStudentID(){
        console.log(`My Student ID is ${this.studentId}`);
    }

    greet(){
        console.log("New Greeting from Student")
    }

}

let student2 = new Student2("John", 21, "21BCP002");
student2.greet()


// Activity 3 : Static Methods and Properties
// Task 5 ::
class StaticPerson{
    static greeting(){
        console.log("Hello, I am a Static Method");
    }
}
StaticPerson.greeting()

// Task 6 ::
class NewStudent{
    static cnt = 0;
    constructor(name, age, studentId){
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        NewStudent.cnt++;
    }

    static countStudents(){
        console.log("Total Students", NewStudent.cnt);
    }
}

let s1 = new NewStudent("Rohit", 37, "MI264")
let s2 = new NewStudent("Kohli", 35, "RCB49")

NewStudent.countStudents()



// Activity 4 : Getters and Setters
// Task 7 :: 
class NewPerson1{
    constructor(firstname,lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get personName(){
        console.log(`First Name : ${this.firstname} and Last Name : ${this.lastname}`)
    }
}

let np1 = new NewPerson1("John", "Doe", 29);
np1.personName


// Task 8 ::
class NewPerson2{
    constructor(firstname,lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get personName(){
       return `${this.firstname} ${this.lastname}`
    }

    set personName(name){
        let names = name.split(" ");
        this.firstname = names[0];
        this.lastname = names[1];
    }
}   

let np2 = new NewPerson2("John", "Doe", 29);
console.log(np2.personName)
np2.personName = "Alice Doe"
console.log(np2.personName)



// Activity 5 : Private Fields
// Task 9 ::
class Account{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        console.log(`Amount ${amount} deposited successfully`)
    }

    withdraw(amount){
        if(this.#balance < amount){
            console.log("Insufficient Balance")
        }else{
            this.#balance -= amount;
            console.log(`Amount ${amount} withdrawn successfully`)
        }
    }

    getBalance(){
        console.log(`Current Balance is ${this.#balance}`)
    }
}

// Task 10 ::
let acc = new Account();
acc.deposit(1000);
acc.withdraw(500);
acc.getBalance();

