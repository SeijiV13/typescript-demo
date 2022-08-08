"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = exports.testFunction = void 0;
// for testing typescript
const testFunction = () => {
    console.log("Amazing");
    console.log("Awesome");
    console.log("Changed again");
    console.log("test change");
    return true;
};
exports.testFunction = testFunction;
// variables with types
var parent;
parent = 4;
parent = "string";
// first (built-in)
var x = 4;
var y = "seiji";
var z = true;
(0, exports.testFunction)();
// second (user-defined) arrays enums interfaces
// Arrays
var nameArray = [];
var otherArray = new Array(10);
nameArray.push("Seiji");
otherArray.push("John Deo");
//  Enums
var Actions;
(function (Actions) {
    Actions[Actions["Create"] = 0] = "Create";
    Actions[Actions["Read"] = 1] = "Read";
    Actions[Actions["Update"] = 2] = "Update";
    Actions[Actions["Delete"] = 3] = "Delete";
})(Actions = exports.Actions || (exports.Actions = {}));
