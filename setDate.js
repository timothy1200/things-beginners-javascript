const merge = Object.assign({}, obj1, obj2);
const toggleBool = () => (bool = !bool);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channelName = getChannelName(channel);