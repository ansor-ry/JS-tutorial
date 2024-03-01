//! Arifmetik Operatorlar
//? " + "
//? " - "
//? " * "
//? " / "
//? " ** "
//? " % "
//? " increment "
//? " decrement "

////

//! " + " Qo'shish Operatori 
/*
let a = 5
let b = 6
console.log(a + b); // 11 
*/

// console.log(null + undefined); // NaN
// console.log(null + 0); // 0
// console.log(undefined + 0); // NaN
// console.log("si" + 7); // si7
// console.log(null + 7); // 7
// console.log(undefined + 7); // NaN

// console.log("si" + null); // sinull
// console.log("si" + {a: 5}); // si[object Object]

////

//! " - " Ayirish Operatori
/*
let a = 5
let b = 6
console.log(a - b); // -1 
*/

////

//! " * " Ko'paytirish Operatori
/*
let a = 5
let b = 6
console.log(a * b); // 30 
*/

////

//! " / " Bo'lish Operatori
/* 
let a = 5
let b = 6
console.log(a / b); // 0.8333333333333334
*/

////

//! " % " Qoldiq Chiqarish Operatori
/*
let a = 5
let b = 6
console.log(a % b); // 5
*/

////

//! " ** " Daraja'ga Ko'tarish Operatori
/*
let a = 5
let b = 6
console.log(a ** b); // 5
*/

////

//! " ++ " Increment (Orttirish) Operatori
/*
let a = 5
console.log(a++); // 5
console.log(a); // 6

let b = 9
console.log(++a); // 10
*/

////

//! " -- " Decrement (Orttirish) Operatori
/*
let x = 5
console.log(x--); // 5
console.log(a); // 4

let y = 9
console.log(--a); // 8
*/

////

//!! " + " Qo'shish Operatori bazi xossalari

//? Agar + 'ning ikkala tomonida sonlar bo'lsa Arifmetik Qo'shiladi Masalan: 7 + 8 = 15 (typeof : number)

//? Agar + 'ning ikkala tomonida Son va String bo'lsa Mantiqiy Qo'shiladi Masalan: 7 + "8" = 78 (typeof : string)


//! Short keys
// let x = 6;
// let y = 4;

// x = x + y; // yechim: "x" ga "y" ni qo'shib va hosil bo'lgan yig'indini "x" ga o'zlashtirish
//* x = x + y === x += y;
// console.log(x); //  10

// let x = 6;
// let y = 4;

// x = x - y; // yechim: "x" dan "y" ni ayirib va hosil bo'lgan ayirmani "x" ga o'zlashtirish
//* x = x - y === x -= y;
// console.log(x); //  2

//! Ba'zi xolatlar

let a = 7;
let b = 8;
console.log(a + b); // 15

let x = '7';
let y = '8'
console.log(x + y); // 78 // number
console.log(typeof ("7" + "8")); // 78 // string
console.log('7' * '8'); // 56 // number
console.log('7' / '8'); // 0.875 // number
console.log('7' - '8'); // -1 // number
console.log(1 + 3 + '4'); // 44 // string
console.log('1' + 3 + '4'); // 134 // string

//? +string
console.log(1 + +'2'); // 12 // number
console.log(1 + +'x'); // NaN

