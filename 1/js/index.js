document.getElementById("btn1").addEventListener("click", async () => {
  try {
    console.log("promise start");
    let ms = await generateNumber();
    document.getElementById(
      "mylist"
    ).innerHTML += `<li class="list-group-item">${ms}</li>`;
    console.log("promise end");
  } catch (error) {}
});
document.getElementById("btn2").addEventListener("click", async () => {
  try {
    console.log("promise start");
    let ms = await generateNumber();
    if (ms < 500) {
      alert("anoing msg");
    }

    console.log("promise end");
  } catch (error) {}
});

let minNumber = (...numbers) => {
  let minNum = numbers[0];
  for (let num of numbers) {
    if (minNum > num) {
      minNum = num;
    }
  }
  return minNum;
};

console.log(minNumber(3, 2, 45, 234, 3, 453, 234, 453));

window.addEventListener("load", async () => {
  try {
    let res = await fetch("http://localhost:3000/").then((response) =>
      response.json()
    );
    console.log("res", res);
  } catch (err) {}
});
