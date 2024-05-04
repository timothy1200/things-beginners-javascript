const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const resultingPromises = urls.map((url) => makHttpRequest(url));