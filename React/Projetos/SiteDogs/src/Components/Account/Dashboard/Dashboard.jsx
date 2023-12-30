import React from 'react';
import './GlobalDashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className={`dashboard container efeito`}>
      <div className="dashboardHeader">
        <h1 className="title">
          <span></span>Minha Conta
        </h1>
        <nav className={'dashboardIcons'}>
          <Link>
            <span className={`dashboardIcon selected`}>
              <i className="fa-solid fa-house"></i>
            </span>
          </Link>
          <Link to="/conta/estatisticas">
            <span>
              <i className="fa-solid fa-chart-simple"></i>
            </span>
          </Link>
          <Link>
            <span>
              <i className="fa-solid fa-plus fa-lg"></i>
            </span>
          </Link>
          <Link>
            <span>
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Dashboard;
