const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log("1 && 2 = "+(1 && 2));