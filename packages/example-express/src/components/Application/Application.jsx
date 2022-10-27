import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';
import 'normalize.css';

const HomePage = loadable(() => import('../HomePage'));
const ErrorPage = loadable(() => import('../ErrorPage'));

export default function Application() {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="utf-8" />
        <title>Test Application</title>
        <meta name="description" content="An application to test out Monetaur's web tooling" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage message="Not Found" />} />
      </Routes>
    </Fragment>
  );
}
