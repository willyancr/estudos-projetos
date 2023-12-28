import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">
          {' '}
          <i className="fa-solid fa-dog fa-2xl"></i>{' '}
        </Link>
        <Link to="/login" className={styles.link}>
          {' '}
          Login / Criar <i className="fa-solid fa-user"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
