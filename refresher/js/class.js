// const obj = {
//   name: "kenny",
//   age: 8,
// };

// const obj2 = {
//   nmae: "bob",
//   age: 8,
// };

class User {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// let user1 = new User("kenny", 10);

const handleCreateUser = () => {
  let nameInput = document.getElementById("name").value;
  let ageInput = document.getElementById("age").value;
  let user2 = new User(nameInput, ageInput);
  console.log("user2", user2);
};
