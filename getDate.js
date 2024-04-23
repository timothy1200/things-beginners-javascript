const updated = numbers.filter(element => element > 6);
console.log("0 || 1 = "+(0 || 1));
var c = new Counter(); c.add(); c.add(); c.add();
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isEmptyArray = arr => !arr.length;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;