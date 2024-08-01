// LocalStorage and SessionStorage challenge

// Day 20

// Activity 1 : Understanding LocalStorage
// Task 1 ::
let keyValue = "college";
localStorage.setItem("Key", keyValue);
let value = localStorage.getItem("Key");
console.log(value);

// Task 2 ::
const person = {
  name: "John",
  age: 22,
};
localStorage.setItem("Person", JSON.stringify(person));
let personValue = JSON.parse(localStorage.getItem("Person"));
console.log(personValue);

// Activity 2 : Using LocalStorage
// Task 3 ::
// const displayText = document.querySelector(".display");

// const displayTextInfo = () => {
//     const name = localStorage.getItem('name');
//     const email = localStorage.getItem('email');
//     displayText.innerHTML = `Name : ${name} <br> Email : ${email}`; // Use innerHTML to include <br> tag
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = document.querySelector(".name").value;
//     const email = document.querySelector(".email").value;
//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     displayTextInfo(); // Update the display
// }

// window.onload = displayTextInfo;

// Task 4 ::
// const removeItem = () => {
//     localStorage.removeItem('name');
//     localStorage.removeItem('email');
//     displayTextInfo();
// }
// removeItem()

// Activity 3 : Understanding SessionStorage
// Task 5 ::
let str = "hey all";
sessionStorage.setItem("Key", str);
let value1 = sessionStorage.getItem("Key");
console.log(value1);

// Task 6 ::
const person1 = {
  name: "John",
  age: 22,
};
sessionStorage.setItem("Person", JSON.stringify(person1));
let personValue1 = JSON.parse(sessionStorage.getItem("Person"));
console.log(personValue1);

// Activity 4 : Using SessionStorage
// Task 7 ::
const displayText1 = document.querySelector(".display");

const displayTextInfo1 = () => {
  const name = sessionStorage.getItem("name");
  const email = sessionStorages.getItem("email");
  displayText1.innerHTML = `Name : ${name} <br> Email : ${email}`; // Use innerHTML to include <br> tag
};

const handleSubmit1 = (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  displayTextInfo1();
};

window.onload = displayTextInfo1;

// Task 8 ::
const removeItem1 = () => {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  displayTextInfo1();
};

// Activity 5 : Comparing LocalStorage and SessionStorage
// Task 9 ::
const saveStorage = (key, value) => {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log("LocalStorage :", localStorage.getItem(key));
  console.log("SessionStorage :", sessionStorage.getItem(key));
};

saveStorage("add", "mumbai");

// Task 10 ::
const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
  console.log(localStorage.getItem("add"));
  console.log(sessionStorage.getItem("add"));
};

clearStorage();
