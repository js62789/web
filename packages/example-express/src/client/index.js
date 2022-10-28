import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import Application from '../components/Application';
import config from '../config';

loadableReady(() => {
  const domContainer = document.querySelector('#root');

  const element = (
    <HelmetProvider>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </HelmetProvider>
  );

  // Avoid issues with server rendering old UI because it doesn't hot reload
  if (config.get('ssr')) {
    hydrateRoot(domContainer, element);
  } else {
    createRoot(domContainer).render(element);
  }
});
