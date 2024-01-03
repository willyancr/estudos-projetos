import React from 'react';
import './GlobalDashboard.css';
import { Link } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard title="Minha Conta" />
      <div className="dashboardMain"></div>
    </>
  );
};

export default Dashboard;
