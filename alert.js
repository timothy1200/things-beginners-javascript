const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const uniqueArray = arr => [...new Set(arr)];
console.log(false == '0');