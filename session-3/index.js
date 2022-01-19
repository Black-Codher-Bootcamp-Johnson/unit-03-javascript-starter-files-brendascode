// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
const a = 5;
const b = 10;
let c = a + b;

console.log ("Original output: "+ c);
 
a = 20;

console.log ("After 'a' has been updated" + c);

const c = a + b;

console.log ("After 'c' has been updated to use the new 'a' value" + c);

function sayHey() {
    console.log ("Hey!");
} 

sayHey();

function conversation() {
    sayHey();
    console.log ("How are you?");
    console.log ("Goodbye"); 
}


function futureAge(name , age){
    const answer= y + 5; 
    return "Hi" + x + "your future age is" + answer; 
}

 console.log (futureAge ("Emma", 22));