import PropTypes from 'prop-types';

export default function ErrorPage({ message }) {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </div>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: 'Unknown Error',
};
