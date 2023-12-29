import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section className={`${styles.dashboard} container efeito`}>
      <div>
        <h1 className="title">
          <span></span>Minha Conta
        </h1>
        <nav>
          <span><i className="fa-solid fa-house"></i></span>
          <span><i className="fa-solid fa-chart-simple"></i></span>
          <span><i className="fa-solid fa-plus fa-lg"></i></span>
          <span><i className="fa-solid fa-right-from-bracket"></i></span>
        </nav>
      </div>
    </section>
  );
};

export default Dashboard;
