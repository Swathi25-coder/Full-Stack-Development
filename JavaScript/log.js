console.log("Welcome to JavaScript");
console.log("My Name is Swathi");
console.log(10 + 20);

let name = "Ravi";
const pi = 3.14;
var oldWay = "avoid this in modern code";

console.log(name);     // Ravi
console.log(pi);       // 3.14
console.log(oldWay);   // avoid this in modern code

// --- Reassigning let (this works) ---
name = "Priya";
console.log(name);     // Priya
pi = 3.14159; // This will throw an error because pi is a constant
console.log(pi);       // 3.14
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sita"));

const greet = () =>{
  return "Hello, World!";
}
