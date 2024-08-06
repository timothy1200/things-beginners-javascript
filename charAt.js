const allResults = await Promise.all(items.map(async (item) => {}));
const uniqueArr = (arr) => [...new Set(arr)];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';