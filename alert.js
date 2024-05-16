console.log("0 || 1 = "+(0 || 1));
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const resultingPromises = urls.map((url) => makHttpRequest(url));