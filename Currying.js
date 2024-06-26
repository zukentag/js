function computeAmount() {
  function calculator() {
    this.toatl = 0;

    this.lacks = function (amount) {
      this.toatl += amount * 100000;
      return this;
    };
    this.crores = function (amount) {
      this.toatl += amount * 10000000;
      return this;
    };

    this.value = function () {
      return this.toatl;
    };
  }
  return new calculator();
}

const ans = computeAmount().lacks(15).crores(2).value();
console.log(ans);
