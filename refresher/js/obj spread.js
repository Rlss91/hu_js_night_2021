let obj = {
  tel: "123",
  name: "kenny",
};

//change → copy by reference
// let obj2 = obj;

// copy obj to obj2
// object spread
let obj2 = { ...obj };

// add new property while copy
let obj3 = { ...obj, age: 8 };

obj3.name = "benny";
obj3.tel = "456";

let obj4 = { ...obj, ...obj3 };

console.log("obj", obj);
console.log("obj3", obj3);
console.log("obj4", obj4);
