const wait = (stopTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, stopTime);
  });
};

export default wait;
