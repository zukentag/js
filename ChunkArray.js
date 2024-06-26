// function chunk(arr, size) {
//   let ans = [];
//   let tmp = [];
//   arr.forEach((element, ind) => {
//     tmp.push(element);

//     if (tmp.length === size || ind === arr.length - 1) {
//       ans.push(tmp);
//       tmp = [];
//     }
//   });
//   return ans;
// }
function chunk(arr, size) {
  let ans = [];
  let tmp = [];
  arr.forEach((element, ind) => {
    tmp.push(element);

    if (tmp.length === size || ind === arr.length - 1) {
      ans.push([...tmp]);
      tmp.length = 0; //efficient than above
    }
  });
  return ans;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 2, 3, 4, 5], 3));
