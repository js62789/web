const genericNames = require('generic-names');

const format = process.env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';

const generateClassName = genericNames(format, {
  context: process.cwd(),
});

export default (localName, filePath) => {
  return generateClassName(localName, filePath.toLowerCase()).replace('-module_', '_');
};
