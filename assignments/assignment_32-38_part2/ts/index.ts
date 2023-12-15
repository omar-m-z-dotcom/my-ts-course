// Write Function Code Here
// function showTypes<T = void, U = void, V = void>(arg1?: T, arg2?: U, arg3?: V): string {
//     return `${typeof arg1 != "undefined" ? arg1 : "Nothing"} - ${typeof arg2 != "undefined" ? arg2 : "Nothing"} - ${typeof arg3 != "undefined" ? arg3 : "Nothing"}`;
// }
function showTypes<T = void, U = void, V = void>(arg1?: T, arg2?: U, arg3?: V): string {
    return `${arg1 ? arg1 : "Nothing"} - ${arg2 ? arg2 : "Nothing"} - ${arg3 ? arg3 : "Nothing"}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true