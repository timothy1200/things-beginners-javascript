const currentDate = () => new Date().toLocaleDateString('en-US');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');