//primitive Types 

let myString:string = "das ist ein string"; // Bsp. "as12", "0"
let myNumber:number = 123; // Bsp. 165, 15.2, NaN
let myBoolean:boolean = false // Bsp. true

let myNull:null = null; // dort wäre etwas ist aber zur Zeit nicht da
let myUndefined:undefined; // dort sollte was sein, aber keiner weiss was da genau sein sollte

// weitere primitive types: bigInt Symbol

let myAnytype; // any einfach vermeiden


//Zuweisung 

let myVariable:string | number  = "hallo" // bsp UNION-Type 
myVariable = 123;

let antotherMyVariable:number | undefined ; // sollte im Zweifel vermieden werden 
antotherMyVariable = 123

class MyClass{
    myAttr:string 

    constructor(){
        this.myAttr = "123"
    }
}