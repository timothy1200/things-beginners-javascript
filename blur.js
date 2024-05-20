const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const getRandomBoolean = () => Math.random() >= 0.5;
const uniqueArr = (arr) => [...new Set(arr)];