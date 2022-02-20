const fetchGet = (url) => {
  return fetch(url).then((response) => response.json());
};

window.addEventListener("load", async () => {
  try {
    let responseFromServer = await fetchGet(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("responseFromServer", responseFromServer);
  } catch (err) {
    console.error("error from fetch", err);
  }
});
