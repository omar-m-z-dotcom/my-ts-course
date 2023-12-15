/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That does Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop" kinda of like a deamon
*/

function logging(msg: string): void {
  console.log(msg);
  return;
}

console.log(logging("Iam A Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10; // Unreachable Code
}

function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

alwaysLog("Osama");
// console.log("Test"); // Unreachable Code