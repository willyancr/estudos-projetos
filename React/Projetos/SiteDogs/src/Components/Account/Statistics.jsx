import React from 'react';
import './GlobalDashboard.css';
import styles from './Statistics.module.css';
import HeaderDashboard from './HeaderDashboard';
import Head from '../../Helper/Head';

const Statistics = () => {
  return (
    <>
      <Head title="Estatisticas" />
      <HeaderDashboard title="Estatisticas" />
      <section className="dashboardMain container efeito">
        <div className={styles.mainHeader}>
          <p>Acessos: 0</p>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.left}>1</div>
          <div className={styles.right}>1</div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
