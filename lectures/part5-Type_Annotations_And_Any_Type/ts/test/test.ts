/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

let tName = "Elzero";
let tAge: number = 40;
let h: boolean = true;
let a: any = "Elzero Web School";
let allV; // Any
let b;
theName = "Osama";
all = 100;
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

// console.log(add(10, 20));
// console.log(typeof add(10, 20));

function addn(n1, n2) {
  return n1 + n2;
}

console.log(addn(10, "20"));
console.log(typeof addn(10, "20"));