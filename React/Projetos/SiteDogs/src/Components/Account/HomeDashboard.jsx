import React from 'react';
import './GlobalDashboard.css';
import HeaderDashboard from './HeaderDashboard';
import Feed from '../Feed/Feed';

const HomeDashboard = () => {
  return (
    <>
      <HeaderDashboard title="Minha Conta" />
      <section className="efeito">
        <Feed />
      </section>
    </>
  );
};

export default HomeDashboard;
