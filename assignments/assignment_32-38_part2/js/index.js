"use strict";
function showTypes(arg1, arg2, arg3) {
    return `${arg1 ? arg1 : "Nothing"} - ${arg2 ? arg2 : "Nothing"} - ${arg3 ? arg3 : "Nothing"}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
