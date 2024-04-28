const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isTabInView = () => !document.hidden;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());