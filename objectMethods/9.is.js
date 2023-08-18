//Object.is : comparing of values
let s = 23
let r = 34
let d = 23
// never compare array and object as it gives false always.
console.log(Object.is(s,r,d));
console.log(Object.is(s,r));
console.log(Object.is(s,d));