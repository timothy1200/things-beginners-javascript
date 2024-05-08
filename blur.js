const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isArray = (arr) => Array.isArray(arr);