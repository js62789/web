import {  NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Page.module.css';

const cx = classnames.bind(styles);

const activeLink = ({ isActive }) => isActive ? cx('active') : undefined;

function Page({ children }) {
  return (
    <div className={cx('content')}>
      <header className={cx('header', 'spread')}>
        <img alt="Logo" height={45} src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" width={218} />
        <nav>
          <NavLink className={activeLink} end to="/">Home</NavLink>
          <NavLink className={activeLink} to="/settings">Settings</NavLink>
        </nav>
      </header>
      <div className={cx('body')}>
        {children}
      </div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: undefined,
};

export default Page;
