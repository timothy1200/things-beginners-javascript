const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);