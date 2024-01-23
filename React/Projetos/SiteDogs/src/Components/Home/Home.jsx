import React from 'react';
import Feed from '../Feed/Feed';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Feed />
    </div>
  );
};

export default Home;
