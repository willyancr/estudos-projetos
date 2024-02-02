import React from 'react';
import './GlobalDashboard.css';
import HeaderDashboard from './HeaderDashboard';
import Feed from '../Feed/Feed';
import styles from './HomeDashboard.module.css';
import { UserContext } from '../../UserContext';

const HomeDashboard = () => {
  const { data } = React.useContext(UserContext);
  return (
    <>
      <HeaderDashboard title="Minha Conta" />
      <section className={`${styles.home} `}>
        <Feed user={data.id} />
      </section>
    </>
  );
};

export default HomeDashboard;
