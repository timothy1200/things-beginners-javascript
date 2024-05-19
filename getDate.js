const isArray = (arr) => Array.isArray(arr);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));