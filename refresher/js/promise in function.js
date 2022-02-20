let zebraDelivery = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve("success");
      } else {
        reject("fail, unsuccess");
      }
    }, 2000);
  });
};

const runPromise = async () => {
  try {
    let dataFromPromise = await zebraDelivery(3);
    //* success
    console.log("dataFromPromise", dataFromPromise);
  } catch (err) {
    //! fail
    console.log("err", err);
  }
};

runPromise();
