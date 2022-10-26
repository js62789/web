import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import 'normalize.css';

const HomePage = loadable(() => import('../HomePage'));
const ErrorPage = loadable(() => import('../ErrorPage'));

export default function Application() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage message="Not Found" />} />
    </Routes>
  );
}
