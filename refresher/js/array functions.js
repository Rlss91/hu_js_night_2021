let arr = [6, 1, 8, 3, 7, 5, 0, 9, 2, 4];

//map create new array
// let arr2 = arr.map((item) => {
//   return item * 2;
// });
let arr2 = arr.map((item) => item * 2);
console.log("arr2", arr2);

//filter create new array
// let arr3 = arr.filter((item) => {
//   return item % 2 == 0;
// });
let arr3 = arr.filter((item) => item % 2 == 0);

//!sort will not create new array
//<0
//>0
//==0
arr.sort((a, b) => b - a);
console.log("sorted arr", arr);
