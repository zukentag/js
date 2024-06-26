const count = (() => {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  inner.reset = () => {
    counter = 0;
  };
  return inner;
})();

console.log(count()); //1
console.log(count()); //2
console.log(count()); //3
count.reset();
console.log(count()); //1
console.log(count()); //2
console.log(count()); //3
