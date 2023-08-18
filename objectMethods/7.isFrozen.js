//Object.isFrozez
let s = {
       fullname: "Sakina",
       age: 22,
    location: "Hyderabad",
   };
   Object.freeze(s);
   // it check whether its frozen or not.
   console.log(Object.isFrozen(s));