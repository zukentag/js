const input = {
  id: 123,
  name: "abc",
  address: {
    hno: "1",
    state: "Delhi",
    country: "India",
    phone: {
      primaryPhone: "111111",
      alternatePhone: "222222",
    },
    email: {
      primaryEmail: "a@b.com",
      alternateEmail: "c@d.com",
    },
  },
};

let output = {};

const convert = (inp) => {
  for (const key in inp) {
    if (typeof inp[key] === "object") {
      convert(inp[key]);
    } else {
      output[key] = inp[key];
    }
  }
};
convert(input);
console.log("result", output);
