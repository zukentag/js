const input = [
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 2", data: "Data2" },
  { key: "Sample 1", data: "Data1" },
  { key: "Sample 3", data: "Data3" },
  { key: "Sample 4", data: "Data4" },
];

// const output = {};

// map
// input.map((item) => {
//   if (output[item.key]) {
//     output[item.key].push(item);
//   } else {
//     output[item.key] = [item];
//   }
// });

const output = input.reduce((acc, item) => {
  if (acc[item.key]) {
    acc[item.key].push(item);
  } else {
    acc[item.key] = [item];
  }
  return acc;
}, {});

console.log("result", output);
