// যখন কোন function ভারি কোন কাজ করে থাকে, কিন্তু প্রতেকবার আমাদের একই প্যারামিটার দিয়ে কল করতে হয় ।  তখন ফাংশন এর ভেল্যুকে কোন জায়াগায় ক্যাশ হিসাবে রেখে, পরবর্তী ফাংশন কলে, ক্যাশ ভেল্যু ইউজ করার প্রক্রিয়াকে মেমোরাইজেশন টেকনিক বলে ।

//single param 🍅
function add(x) {
  return 10 + x;
}

const memo = (func) => {
  let cache = {};
  return function (x) {
    console.log(cache);
    if (cache[x]) {
      console.log("result from cache");
      return cache[x];
    } else {
      console.log("calculation result");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
};

const calculate = memo(add);
// console.log(calculate(10))
// console.log(calculate(10))

//multiple param 🍓
function add2(...x) {
  return x.reduce((sum, curr) => sum + curr);
}

const memo2 = (func) => {
  let cache = {};
  return function (...x) {
    // const key = JSON.stringify(x)
    console.log(cache);
    if (cache[key]) {
      // console.log("result from cache")
      return cache[key];
    } else {
      // console.log("calculation result")
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
};

const calculate2 = memo2(add2);
// console.log(calculate2(10, 20, 30))
// console.log(calculate2(10, 20, 30))
