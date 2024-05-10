const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = Object.assign({}, obj1, obj2);