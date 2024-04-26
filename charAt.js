console.log(1 +  "2" + "2");
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyArray = arr => !arr.length;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);