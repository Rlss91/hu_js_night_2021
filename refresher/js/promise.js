let zebraDelivery = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = new Date().getMilliseconds();
    if (number % 2 == 0) {
      resolve("success");
    } else {
      reject("fail, unsuccess");
    }
  }, 2000);
});

const runPromise = async () => {
  try {
    let dataFromPromise = await zebraDelivery;
    //* success
    console.log("dataFromPromise", dataFromPromise);
  } catch (err) {
    //! fail
    console.log("err", err);
  }
};

runPromise();
