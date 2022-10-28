import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Middle from '../Middle';
import styles from './HomePage.module.css';

const cx = classnames.bind(styles);

export default function HomePage() {
  return (
    <Middle fullscreen>
      <h1 className={cx('fullscreen')}>Welcome!</h1>
      <Link to="/dashboard">Dashboard</Link>
    </Middle>
  );
}
