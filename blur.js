const isWeekday = (date) => date.getDay() % 6 !== 0;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');