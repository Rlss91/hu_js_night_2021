const calcOdd = (...numbers) => {
  console.log("numbers", numbers);
  let sum = 0;
  for (let item of numbers) {
    /*
    The parseFloat() method converts a string into a point number (a number with decimal points). You can even pass in strings with random text in them.
    */
    let number = parseFloat(item);
    if (number % 2 == 1) {
      sum += number;
    }
  }
  return sum;
};

console.log(calcOdd(1, 2, 3, 4, 5));

const handleCalcClick = () => {
  let inputData = document.getElementById("calcInput");
  if (inputData) {
    //"1,2,3,4,5"
    //split(',')
    //["1", "2", "3", "4", "5"]
    let arrNumber = inputData.value.split(",");
    let sum = calcOdd(...arrNumber);
    let resoltInput = document.getElementById("resultInput");
    if (resoltInput) {
      resoltInput.innerText = sum;
    }
    console.log("sum", sum);
  }
};

window.addEventListener("load", () => {
  console.log("your webside finish to loaded");
});
