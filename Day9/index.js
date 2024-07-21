// DOM Manipulation challenge

// Day 9

// Activity 1 : Selecting and Manipulating Elements
// Task 1 ::
const paragraphText = document.getElementById("text");
text.textContent = "Hello World"

// Task 2 ::
const heading = document.getElementsByClassName("h1");
heading[0].style.backgroundColor = "red";



// Activity 2 : Creating and Appending Elements
// Task 3 ::
const divElem = document.createElement("div");
divElem.textContent = "Hey, I am a new Div"
document.body.appendChild(divElem);

// Task 4 :: 
const ulList = document.querySelector(".list");
const newList = document.createElement("li");
newList.textContent = "English";
ulList.appendChild(newList);



// Activity 3 : Removing Elements
// Task 5 ::
const removeElem = document.getElementById("extra");
removeElem.remove()

// Task 6 ::
const removeList = document.querySelector(".list");
removeList.lastElementChild.remove();



// Activity 4 : Modifying Attributes and Classes
// Task 7 ::
const imageElem = document.querySelector(".image");
imageElem.setAttribute("src", "image2.png")


// Task 8 ::
const htmlElem = document.querySelector(".htmlElem");
htmlElem.classList.add("bg-color");
htmlElem.classList.remove("bg-color")



// Activity 5 : Event Handling
// Task 9 ::
function changeText(){
    const paraEle = document.querySelector(".para")
    paraEle.textContent = "Change Paragraph :)"
}

// Task 10 ::
const borderElem = document.querySelector(".border-change");
borderElem.addEventListener("mouseover", () => {
    borderElem.style.borderColor = "red"
});
borderElem.addEventListener("mouseout", () => {
    borderElem.style.borderColor = "black"
});

