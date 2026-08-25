//Function to add two numbers
const add = (a, b) => a + b;


let n1 = 10;
let n2 = 20;
let expected=30;
let actual = add(n1,n2);


console.log(" Actual :" + actual + "Expected : " +expected);

if (actual === expected)
{ console.log("Pass")}
else
{ console.log("Fail")}

