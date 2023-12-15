"use strict";
function getActions(btns) {
    console.log(`from getActions`);
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
function getActions2(btns) {
    console.log(`from getActions2`);
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: "String", two: 100, three: true, five: true });
getActions2({ one: "String", two: 100, three: true });
getActions2({ one: "String", two: 100, three: true, five: true });
