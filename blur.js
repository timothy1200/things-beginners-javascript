const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const randomString = () => Math.random().toString(36).slice(2);
const merge = [...new Set([...a, ...b])];