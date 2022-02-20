const f1 = (name, age) => {};

let obj = {
  name: "kenny",
  age: 8,
  od_dvarim: "ken",
};

f1(obj.name, obj.age);

//obj destructuring in function arguments
const f2 = ({ name, age }) => {
  console.log("name", name);
  console.log("age", age);
};

f2(obj);

// let od_dvarim = obj.od_dvarim;
//obj destructuring
let { od_dvarim } = obj;
console.log("od_dvarim", od_dvarim);
