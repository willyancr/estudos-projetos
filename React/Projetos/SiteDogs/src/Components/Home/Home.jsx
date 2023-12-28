import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <section className={`${styles.home} container efeito`}>
      <div>
        <ul className={styles.ulFeed}>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
          <div className={styles.imageDogsFeed}>
            <li>
              <img src="../image/dog.jpg" alt="" />
            </li>
            <span className={styles.views}>
              <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
              22540
            </span>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Home;
