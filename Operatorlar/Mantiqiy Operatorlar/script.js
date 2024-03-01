//! Mantiqiy Operatorlar

/*    
!    && -> and (va)
!   || -> or (yoki)
!    ! -> not (emas)
*/

//? && -> and, (va)
/* 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false 
*/

//? || -> or, (yoki)
/* 
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false 
*/

//? "!"" -> not, (emas)
/* 
console.log(!true); // false
console.log(!false); // true 
*/

//! || , or , yoki --- birinchi qism true bo'lsa shu qism ishlaydi aks holda keyingi qismga o'tadi
console.log(false || true); // true
console.log(false || 1); // 1
console.log(false || "false"); // false
console.log(true || "false"); // true
console.log(true || 1); // true

//! && , and , va --- birinchi qism true bo'lsa keyingi qismga o'tadi aks xolda shart false qaytaradi
console.log(true && 1); // 1
console.log(false && 1); // false

//! trusy, falsy qiymatlar
//! falsy qiymatlar
// undefined
// null
// 0
// false
// ""
// NaN
