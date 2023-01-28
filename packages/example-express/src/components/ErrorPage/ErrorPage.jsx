import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import useStatus from '../../hooks/useStatus';
import styles from './ErrorPage.module.css';

const cx = classnames.bind(styles);
export default function ErrorPage({ message, status }) {
  useStatus(status);

  return (
    <center>
      <span className={cx('sad')}>☹</span>
      <h1 className={cx('title')}>{status}</h1>
      <h2 className={cx('subtitle')}>{message}</h2>
      <p>Oh No! An error has occurred.</p>
    </center>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
  status: PropTypes.number,
};

ErrorPage.defaultProps = {
  message: 'Unknown Error',
  status: 200,
};
