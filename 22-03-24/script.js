// // basic syntax
// ```
// JS is JIT (Just in Time) 
// JS is loosely types --> Typechecking happens only in runtime 
//                     --> A variable isn't bound to a single datatype.
// 1) Variables

// let , const , var -> segregated by scope
//  let-> current scope
//  const -> constant 
//  var-> accessible outside current scope

//  let x=5
//  x="Neeraj"


// 2) Primitives

// Number , String , Boolean , Undefined , Symbol , BigInt


// 3) Printing values 

// console.log()
// console.err()

// 4) Operators
// ==, != , &&, || , !
// '==='-> equality and type

// 5) Control flow 

// if .... else 

// e.g.
//  if (x>5){
//     console.log("x is greater")
//  }
//  else{

//  }

// for loop
// for(let x=0; x<5;x++){
//     ///
// }
// Array.forEach(x=>x*2)


// 6) Functions

// Syntax->

// 1) function addValues(x,y){
//     return x+y;
// }

// 2) (Arrow functions)

// const addValues=(x,y)=>{
//     return x+y;
// }


// 7) < takeaway >
// Higher Order Functions ( HOFs)
// Functions that have other functions as arguments
// Currying

// 8) Collections
// Arrays , Sets , Maps , JSON (Javascript Object Notation)<==>python dictionary
// Arrays
 
// let arr=[5,7,"Hi",True]
// var arr2= new Array(4) ==> using constructor

// arr.length
// arr.sort()
// arr.push()
// arr.pop()
// arr.unshift() -> adds new element to the beginning and shifts all other elements
// arr.shift() -> equivalent to queue pop

// Maps & Sets 

// 1) Maps -> KV store (key can only be strings)
//         -> Maps are unordered 
//         -> know the keys to access something
//     e.g.
//     const map= new Map();
//     map.set("name","Neeraj")
//     map.get("name")-> "Neeraj"
//     methods used with map are :-
//      -> size (property for how many elements are there)
//      -> has(key) (checks membership (True/False))
//      -> delete(key) (deletes KV pair based on key)
//      -> clear() (clears the map)

//     iteration :-
//     map.forEach((k,v)=>{
//         ......
//     })

// 2) Set  -> store for elements 
//         -> ordered as well as every element is unique
//  const set = new Set();
//  set.add("")

// 3) JSON ( JS Object Notation)
// const dict = {
//     "name":"Neeraj",
//     "age":,

// } 
// dict.name



// Scope of variables :-
// var -> available everywhere and is not constant.
// let -> available only in current scope and is not constant.
// const -> available everywhere and is constant.

// Hoisting -> things can be accessed before they are declared.
//          -> creates and allocates memory (in the heap) to functions and variables



// JS Classes 

// class Car {
//     #insurance_number;
//     static total=0;
//     constructor(name,year,make,ins_num){
//         this.name=name
//         this.year=year
//         this.make=make
//         this.insurance_number=ins_num
//         total+=1
//     }

//     age(){
//         return time.getDate().year - this.year 
//     }
// }

// const myCar= new Car("Rapid",2014,"Skoda")
// myCar.age()

// Error Handling

// 1) try
// 2) catch
// 3) finally

// try{
//     // code that can throw error
// }
// catch(err){
//     console.err(err.message)
// }
// finally(
//     logger.send(event)
// )


// Browser APIs

// navigator -> routing from browser
// window -> accessing properties of current window
// document -> used for DOM manipulation

// 1) navigator -> generally used for hardware

// 2) window -> current browser specs

// a) height and width of current screen -> window.innerHeight, window.innerWidth
// b) localstorage(KV store inside browser) -> window.localStorage()
// c) window.url -> returns current URL on the bar ( used for parsing )
// d) window.cookieStore -> key,value stored on the browser for storing user-related information


// 3) document -> Dom activities 
// -> manipulation of DOM ( adding , removing elements , changing css)
// -> adding event listeners (add functionality)

// --- add/remove classes using JS setAttribute ----
// const box= document.querySelector("#box");
// const click_button= document.createElement("button")
// click_button.textContent="Click Me!"
// click_button.setAttribute("class","button-1")
// box.appendChild(click_button)



TASK 

render a Box and 3 buttons on the screen with the following functionality
1) Box should initially have no background Color.
2) the two buttons could be of any color (different) , clicking them should change the background color of the box
3) add a third button that adds a border to the box
// ```

const box= document.querySelector("#box");
const click_button= document.createElement("button")
click_button.textContent="Click Me!"
click_button.setAttribute("class","button-1")
box.appendChild(click_button)


//
button = document.querySelector(".button-1")
button.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("hello!");
})