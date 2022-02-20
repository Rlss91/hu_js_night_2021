window.addEventListener("load", () => {
  let arr = ["123", "234", "345", "456", "567"];
  let str = "";
  for (let item of arr) {
    str += `<li>${item}</li>`;
  }
  document.getElementById("list").innerHTML = str;
});
