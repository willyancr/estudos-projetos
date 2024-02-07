import React from 'react';
import './GlobalDashboard.css';
import styles from './Statistics.module.css';
import HeaderDashboard from './HeaderDashboard';
import Head from '../../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Loading from '../../Helper/Loading';

const Statistics = () => {
  const { request, loading, error, data } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    fetchData();
  }, [request]);

  if (loading) return <p className={styles.loading}><Loading /></p>
  if (error) return <p>{error}</p>;
  if (data)
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
  else {
    return null;
  }
};

export default Statistics;
