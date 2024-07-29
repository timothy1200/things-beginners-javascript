var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};