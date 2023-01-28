import { HelmetProvider } from 'react-helmet-async';

export default () => {
  const helmetContext = {};

  return {
    Component: (args) => (
      <HelmetProvider context={helmetContext} {...args} />
    ),
    attributes: () => ({
      bodyAttributes: helmetContext.helmet.bodyAttributes.toString(),
      htmlAttributes: helmetContext.helmet.htmlAttributes.toString(),
      link: helmetContext.helmet.link.toString(),
      meta: helmetContext.helmet.meta.toString(),
      script: helmetContext.helmet.script.toString(),
      style: helmetContext.helmet.style.toString(),
      title: helmetContext.helmet.title.toString(),
    }),
  };
};
