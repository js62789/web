const genericNames = require('generic-names');

const format = process.env.NODE_ENV === 'production' ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]';

const generateClassName = genericNames(format, {
  context: process.cwd(),
});

function doIt(localName, filePath) {
  return generateClassName(localName, filePath.toLowerCase()).replace('-module_', '_');
}

exports.generateScopedName = function generateScopedName(c, path) {
  return doIt(c, path);
};

exports.getLocalIdent = function getLocalIdent(loaderContext, localIdentName, localName) {
  return doIt(localName, loaderContext.resourcePath);
};
