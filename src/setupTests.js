const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const { TextEncoder, TextDecoder } = require('util');
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });
