// Event Handling challenge

// Day 10

// Activity 1 : Basic Event Handling
// Task 1 ::
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");
btn.addEventListener('click', ()=>{
    para.textContent = "Change Text after Clicking"
})

// Task 2 ::
let toggle = document.querySelector(".toggle");
let image = document.querySelector(".img");
// double click 
toggle.addEventListener('dblclick', () => {
    if (getComputedStyle(image).visibility === "hidden") {
        image.style.visibility = "visible";
    } else {
        image.style.visibility = "hidden";
    }
});



// Activity 2 : Mouse Events;
// Task 3 ::
let elem = document.querySelector(".elem");
elem.addEventListener('mouseover', () => {
    elem.style.backgroundColor = "green";
})

// Task 4 ::
elem.addEventListener('mouseout', () => {
    elem.style.backgroundColor = "red";
})



// Activity 3 : Keyboard Events
// Task 5 ::
let input = document.querySelector("#input");
let display = document.querySelector(".display")
input.addEventListener('keydown', (event)=> {
    display.textContent = `Displayed : ${event.key}`;
    console.log(`Pressed : ${event.key}`)
})

// Task 6 ::
input.addEventListener('keyup', () => {
    display.textContent = "Displayed : ";
    console.log("Key Released")
})



// Activity 4 : Form Events
// Task 7 :: 
let myform = document.getElementById('myform');
myform.addEventListener('submit', (event) => {
    event.preventDefault();
})

// Task 8 ::
let selection = document.getElementById("option")
let text = document.getElementById("text")
selection.addEventListener('change', () => {
    text.textContent = `${selection.value}`
})



// Activity 5 : Event Delegation
// Task 9 :: 
const list=document.getElementById('list');
 list.addEventListener('click',(event)=>{
    if(event.target.tagName ==='LI'){
        console.log(`clicked item text: ${event.target.textContent}`);
    }
 })

//  Task 10 ::
const parent=document.getElementById('parent');
 const addchild=document.getElementById('addchild');

 let childcount=0;
 parent.addEventListener('click',(event)=>{
    if(event.target.classList.contains('child')){
        console.log(`clicked child element text:${event.target.textContent}`);
    }
 });

 addchild.addEventListener('click',()=>{
    childcount++;
    const newchild=document.createElement('div');
    newchild.className = 'child';
    newchild.textContent=`child ${childcount}`;
    parent.appendChild(newchild);
 })