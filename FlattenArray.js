const a = [1, 2, 3, { a: "ba" }, [4, [5, 6], [7, 8]]];

const output = [];

function solve(arr) {
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      solve(element);
    } else {
      output.push(element);
    }
  });
}

solve(a);
console.log(output);
