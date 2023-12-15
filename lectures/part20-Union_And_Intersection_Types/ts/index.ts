/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
  one: string,
  two: number,
  three: boolean
}

type B = A & {
  four: number
}

type C = {
  five: boolean
}

type mix = A & C; // intersection type  both A and C types are required

type mix2 = A | C;// union type  either A or C type or both are required

function getActions(btns: mix) {
  console.log(`from getActions`);
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

function getActions2(btns: mix2) {
  console.log(`from getActions2`);
  console.log(`Hello ${(btns as A).one}`);
  console.log(`Hello ${(btns as A).two}`);
  console.log(`Hello ${(btns as A).three}`);
  console.log(`Hello ${(btns as C).five}`);
}

getActions({ one: "String", two: 100, three: true, five: true });
getActions2({ one: "String", two: 100, three: true });
getActions2({ one: "String", two: 100, three: true, five: true });