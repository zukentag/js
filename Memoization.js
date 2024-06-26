const map = new Map();

function memoize(func) {
  function eval(...args) {
    const key = args.join("#");
    if (map.has(key)) {
      const res = map.get(key);
      console.log("--> Memo", res);
      return res;
    }

    const res = func(...args);
    map.set(key, res);
    console.log("-->", res);
    return res;
  }

  return eval;
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

memoizedAdd(1, 2);
memoizedAdd(1, 2);
