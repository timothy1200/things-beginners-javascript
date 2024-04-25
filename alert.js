const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;