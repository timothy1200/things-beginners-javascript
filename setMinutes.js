const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const symbolsPath = path.join(buildOutputPath, 'symbols');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);