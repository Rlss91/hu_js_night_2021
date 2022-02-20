const strToArr = (str) => {
  return new Promise((resolve, reject) => {
    if (str) {
      let arr = str.split(" ");
      resolve(arr);
    } else {
      reject("this is not a string");
    }
  });
};

const handleBtnClick = async () => {
  try {
    let valStrInput = document.getElementById("strInput").value;
    let arrFromStr = await strToArr(valStrInput);
    console.log(arrFromStr);
    let newElements = "";
    for (let item of arrFromStr) {
      //   newElements += item + "<br>";
      //   newElements += "<li>" + item + "</li>";
      newElements += `<li>${item}</li>`;
    }
    document.getElementById("strOutput").innerHTML = newElements;
  } catch (err) {
    console.error("error from promise", err);
  }
};
