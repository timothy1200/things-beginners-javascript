const isEmptyArray = arr => !arr.length;
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const isTabInView = () => !document.hidden;