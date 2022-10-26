import { hydrateRoot } from 'react-dom/client';
import Application from '../components/Application';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';

loadableReady(() => {
  const domContainer = document.querySelector('#root');

  hydrateRoot(domContainer, (
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  ));
});
