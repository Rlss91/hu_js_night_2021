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
  } catch (err) {
    console.error("error from promise", err);
  }
};
