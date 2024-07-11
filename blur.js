console.log(1 +  "2" + "2");
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());