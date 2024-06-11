const results = await Promise.all(resultingPromises);
const flattenedArray = arr => [].concat(...arr);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;