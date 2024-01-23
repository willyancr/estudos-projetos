import React from 'react';
import './GlobalDashboard.css';
import HeaderDashboard from './HeaderDashboard';
import Feed from '../Feed/Feed';
import styles from './HomeDashboard.module.css';

const HomeDashboard = () => {
  return (
    <>
      <HeaderDashboard title="Minha Conta" />
  <section className={`${styles.home} efeito`}>
        <Feed />
      </section>
    </>
  );
};

export default HomeDashboard;
