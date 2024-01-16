import React from 'react';
import './GlobalDashboard.css';
import HeaderDashboard from './HeaderDashboard';

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard title="Minha Conta" />
      <section className="dashboardMain container efeito">
        <div># HOME #</div>
      </section>
    </>
  );
};

export default Dashboard;
