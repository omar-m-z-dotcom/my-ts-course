/*
  Data Types
  - Advanced Type Alias
*/

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string
}

type Last = Buttons & {
  x: boolean
} // Intersection Type (AND) - All Types Must Be Satisfied

function getActions(btns: Last) {
  console.log(`Action For Button Up Is ${btns.up}`);
  console.log(`Action For Button Right Is ${btns.right}`);
  console.log(`Action For Button Down Is ${btns.down}`);
  console.log(`Action For Button Left Is ${btns.left}`);
  console.log(`Action For Button X Is ${btns.x}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });

// {
//   type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string
//   }

//   type Last = Buttons | {
//     x: boolean
//   } // Union Type

//   let btns: Last = {
//     up: "Jump",
//     right: "Go Right",
//     down: "Go Down",
//     left: "Go Left"
//   }

//   let btns2: Last = {
//     x: true
//   }

//   function getActions(btns: Last, btns2: Last) {
//     console.log(`Action For Button Up Is ${(btns as Buttons).up}`);
//     console.log(`Action For Button Right Is ${(btns as Buttons).right}`);
//     console.log(`Action For Button Down Is ${(btns as Buttons).down}`);
//     console.log(`Action For Button Left Is ${(btns as Buttons).left}`);
//     console.log(`Action For Button X Is ${(btns2 as {
//       x: boolean
//     }).x
//       }`);
//   }

//   getActions(btns, btns2);
// }


// {
//   type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string
//   }

//   type Last = Buttons | {
//     x: boolean
//   } // Union Type (OR) - Any Type Can Be Satisfied or Both

//   let btns: Last = {
//     up: "Jump",
//     right: "Go Right",
//     down: "Go Down",
//     left: "Go Left",
//     x: true
//   }

//   function getActions(btns: Last) {
//     console.log(`Action For Button Up Is ${(btns as Buttons).up}`);
//     console.log(`Action For Button Right Is ${(btns as Buttons).right}`);
//     console.log(`Action For Button Down Is ${(btns as Buttons).down}`);
//     console.log(`Action For Button Left Is ${(btns as Buttons).left}`);
//     console.log(`Action For Button X Is ${(btns as {
//       x: boolean
//     }).x}`);
//   }

//   getActions(btns);
// }