import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section className={`${styles.dashboard} container efeito`}>
      <div>
        <h1 className="title">
          <span></span>Minha Conta
        </h1>
      </div>
    </section>
  );
};

export default Dashboard;
