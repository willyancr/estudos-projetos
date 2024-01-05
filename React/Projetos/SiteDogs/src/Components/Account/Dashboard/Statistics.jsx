import React from 'react';
import './GlobalDashboard.css';
import styles from './Statistics.module.css'
import HeaderDashboard from './HeaderDashboard';

const Statistics = () => {
  return (
    <>
      <HeaderDashboard title="Estatisticas" />
      <section className="dashboardMain container efeito">
        <div className={styles.mainHeader}>
          <p>Acessos: 0</p>
        </div>
      </section>
    </>
  );
};

export default Statistics;
