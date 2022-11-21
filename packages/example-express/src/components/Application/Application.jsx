import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { Fragment } from 'react';
import 'normalize.css';
import './Application.css';
import Page from '../Page';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const options = {
  fallback: (
    <Fragment>Loading...</Fragment>
  ),
};

const HomePage = loadable(() => import('../HomePage'), options);
const ErrorPage = loadable(() => import('../ErrorPage'), options);

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
      <Page>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage message="Not Found" />} />
          </Routes>
        </ErrorBoundary>
      </Page>
    </Fragment>
  );
}
