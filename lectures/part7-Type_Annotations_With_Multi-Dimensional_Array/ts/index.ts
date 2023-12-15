/*
  Type Annotations With Multidimensional Arrays
*/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];

let arryFive: ((number | number[])[])[] = [[1, 2, 3, [1, 2, 3]], [4, 5, 6], [7, 8, 9]];
// let arryFive: (number | number[])[][] = [[1, 2, 3, [1, 2, 3]], [4, 5, 6], [7, 8, 9]];

let arrySix: (number | string | boolean | (string | (number | boolean[])[])[])[] = [1, 2, 3, 4, "A", "B", ["C", "D", [1, 2, 3.2, [true, false]]], true, false];