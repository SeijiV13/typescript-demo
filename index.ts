// for testing typescript
export const testFunction = () => {
    console.log("Amazing");
    console.log("Awesome");
    console.log("Changed again");
    return true;

}
// variables with types

var parent: any;
parent = 4;
parent = "string";
// first (built-in)
var x: number = 4;
var y: string = "seiji";
var z: boolean = true;
testFunction();
// second (user-defined) arrays enums interfaces
// Arrays
var nameArray: string[] = [];
var otherArray = new Array(10);
nameArray.push("Seiji");
otherArray.push("John Deo")
//  Enums
export enum Actions {
    Create,
    Read,
    Update,
    Delete
}
// interfaces
interface Cat {
    name: string;
    breed: string;
    eat: (food: string) => {}
}
