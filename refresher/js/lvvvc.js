//? var vs let vs const

//! var can be accessed from another scope
//! dont use var

function f1() {
  var i = 5;
}

//* let can be edited at any time inside scope
function f2() {
  let i = 0;

  i = 5;
}

//* const and let same in scope
//! const can't be edited
const f3 = () => {};
const PI = 3.14;
//! XXXXXXXXXXX f3 = 5; XXXXXXXXXXXXX
