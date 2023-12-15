"use strict";
function printInConsole(...params) {
    let message = "";
    params.forEach((param) => {
        message += `The Value Is: ${param} and Type is: ${typeof param}\n`;
    });
    message += `Done`;
    return message;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=index.js.map