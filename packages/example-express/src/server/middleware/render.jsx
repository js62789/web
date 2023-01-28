import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Application from '../../components/Application';
import config from '../../config';
import DecoratorSet from '../decorators';

export default function render(req, res) {
  const decorators = new DecoratorSet();

  const WrappedApplication = decorators.wrapApplication(() => (
    <StaticRouter location={req.url}>
      <Application />
    </StaticRouter>
  ));

  const stream = renderToPipeableStream(<WrappedApplication />, {
    onShellReady() {
      res.setHeader('Content-type', 'text/html');

      const {
        htmlAttributes,
        title,
        meta,
        link,
        status,
        style,
        bodyAttributes,
      } = decorators.getAttributes();

      res.status(status);

      // typically you'd want to write some preliminary HTML, since React doesn't handle this
      res.write(`
        <!doctype html>
        <html ${htmlAttributes}>
          <head>
            ${title}
            ${meta}
            ${link}
            ${style}
          </head>
        <body ${bodyAttributes}><div id="root">
      `.trim());

      // Avoid issues with server rendering old UI because it doesn't hot reload
      if (config.get('ssr')) {
        stream.pipe(res, { end: false });
      }
    },
    onShellError() {
      // Something errored before we could complete the shell so we emit an alternative shell.
      res.status(500).send('<!doctype html><h1>An error has occurred</h1></script>');
    },
    onAllReady() {
      const {
        script,
      } = decorators.getAttributes();
      res.end(`</div>${script}</body></html>`);
    },
    onError(err) {
      res.status(err.statusCode || 500);
      console.error(err);
    },
  });
}
