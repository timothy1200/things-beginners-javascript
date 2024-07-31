const currentDate = () => new Date().toLocaleDateString('en-US');
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);