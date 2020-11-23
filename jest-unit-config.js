const config = require('./jest.config');
config.testRegex = '(/__tests__/.*|(\\.|/)(spec))\\.tsx?$';
module.exports = config;
