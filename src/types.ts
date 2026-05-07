//primitive Types

let myString: string = "das ist ein string"; // Bsp. "as12", "0"
let myNumber: number = 123; // Bsp. 165, 15.2, NaN
let myBoolean: boolean = false; // Bsp. true

let myNull: null = null; // dort wäre etwas ist aber zur Zeit nicht da
let myUndefined: undefined; // dort sollte was sein, aber keiner weiss was da genau sein sollte

// weitere primitive types: bigInt Symbol

let myAnytype; // any einfach vermeiden

//Zuweisung

let myVariable: string | number = "hallo"; // bsp UNION-Type
myVariable = 123;

let antotherMyVariable: number | undefined; // sollte im Zweifel vermieden werden
antotherMyVariable = 123;

class MyClass {
  myAttr: string;

  constructor() {
    this.myAttr = "123";
  }
}

// Literals

let myLiteral: "admin" | "staff" | "member" | 42 = 42;

// Arrays

let myFirstArray: number[] = [123, 123434, 5454];

let mySecondArray: (string | number | boolean)[] = [123, "hallo", true];

// Tupels

let myTupelArray: [string, number] = ["admin", 42]; // das ist ein Tupel, es muss genau so wieder gegeben werden
let mySecoundTupelArray: [string, 42 | 41, number] = ["admin", 41, 123];

// Funktionen

function withReturn(a: number, b: number): number {
  return a + b;
}

function withoutReturn(name?: string): void {
  //optionale Parameter & was ist Void
  console.log(name ? name : "unknow");
}

// Objekte

let product: {
  name: string;
  price?: number;
  logger: (msg:string) => void
} = {
  name: "book",
  logger:(msg) => {console.log(msg)}
};

import {User} from './interfaces'

function logAdmin(user:User):User{
    return user
}
