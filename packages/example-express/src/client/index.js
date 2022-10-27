import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import Application from '../components/Application';

loadableReady(() => {
  const domContainer = document.querySelector('#root');

  hydrateRoot(domContainer, (
    <HelmetProvider>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </HelmetProvider>
  ));
});
