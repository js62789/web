import PropTypes from 'prop-types';
import Middle from '../Middle';

export default function ErrorPage({ message }) {
  return (
    <Middle fullscreen id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </Middle>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'Unknown Error',
};
