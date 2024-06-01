const resultingPromises = urls.map((url) => makHttpRequest(url));
const timeFromDate = date => date.toTimeString().slice(0, 8);