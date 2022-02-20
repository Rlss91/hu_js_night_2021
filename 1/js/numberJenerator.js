let generateNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let date = new Date();
      let ms = date.getMilliseconds();
      if (!(ms % 2)) {
        //success - even numbers
        console.log(ms);
        // document.getElementById(
        //   "mylist"
        // ).innerHTML += `<li class="list-group-item">${ms}</li>`;
        resolve(ms);
      } else {
        //fail - odd numbers
        console.error(ms);
        reject({ msg: "this number is odd", number: ms });
      }
    }, 5000);
  });
};
/*

false:
false
0
null
undefined
''


*/
