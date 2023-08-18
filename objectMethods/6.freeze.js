Object.freeze
 let s = {
        fullname: "Sakina",
        age: 22,
        location: "Hyderabad",
    };
    // it doesnt change the data 
    Object.freeze(s);
    s.location = "mumbai"; // add
    s. age = 33; //update
    delete s.age; // delete
    console.log(s);
