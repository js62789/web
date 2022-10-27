import generateClassName from './generateClassName';

export default (loaderContext, localIdentName, localName) => generateClassName(localName, loaderContext.resourcePath);
