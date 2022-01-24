// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

console.log ('Hello everyone!')
console.log ('Hey,' + 'how are you?')

console.log (document.querySelector('.about').innerHTML);

console.log (document.querySelectorAll('.about'));




const a = 5;
const b = 10;
let c = a + b;

console.log ("Original output: "+ c);
 
a = 20;

console.log ("After 'a' has been updated" + c);

const c = a + b;

console.log ("After 'c' has been updated to use the new 'a' value" + c);
