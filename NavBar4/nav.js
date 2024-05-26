const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.5;
    if (shouldResolve) {
      resolve("Hello World");
    } else {
      reject("Error occurred");
    }
  }, 2000);
});
  