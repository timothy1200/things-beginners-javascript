const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);