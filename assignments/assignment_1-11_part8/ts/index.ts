// Write The Function Here
function printInConsole(...params: any[]) {
    let message = "";
    params.forEach((param) => {
        message += `The Value Is: ${param} and Type is: ${typeof param}\n`;
    });
    message += `Done`;
    return message;
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));