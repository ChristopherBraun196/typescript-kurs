"use strict";
//primitive Types
Object.defineProperty(exports, "__esModule", { value: true });
let myString = "das ist ein string"; // Bsp. "as12", "0"
let myNumber = 123; // Bsp. 165, 15.2, NaN
let myBoolean = false; // Bsp. true
let myNull = null; // dort wäre etwas ist aber zur Zeit nicht da
let myUndefined; // dort sollte was sein, aber keiner weiss was da genau sein sollte
// weitere primitive types: bigInt Symbol
let myAnytype; // any einfach vermeiden
//Zuweisung
let myVariable = "hallo"; // bsp UNION-Type
myVariable = 123;
let antotherMyVariable; // sollte im Zweifel vermieden werden
antotherMyVariable = 123;
class MyClass {
    myAttr;
    constructor() {
        this.myAttr = "123";
    }
}
// Literals
let myLiteral = 42;
// Arrays
let myFirstArray = [123, 123434, 5454];
let mySecondArray = [123, "hallo", true];
// Tupels
let myTupelArray = ["admin", 42]; // das ist ein Tupel, es muss genau so wieder gegeben werden
let mySecoundTupelArray = ["admin", 41, 123];
// Funktionen
function withReturn(a, b) {
    return a + b;
}
function withoutReturn(name) {
    //optionale Parameter & was ist Void
    console.log(name ? name : "unknow");
}
// Objekte
let product = {
    name: "book",
    logger: (msg) => { console.log(msg); }
};
function logAdmin(user) {
    return user;
}
