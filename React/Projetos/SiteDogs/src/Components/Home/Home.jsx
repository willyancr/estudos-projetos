import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
  ];

  return (
    <section>
      <div className={`${styles.home} container efeito`}>
        <ul className={styles.ulFeed}>
          {images.map((image) => (
            
              <Link to='/modal' className={styles.imageDogsFeed}>
                <li>
                  <img src={image.src} alt="" />
                </li>
                <span className={styles.views}>
                  <i
                    className="fa-regular fa-eye"
                    style={{ color: '#fff' }}
                  ></i>{' '}
                  {image.views.toFixed(1)}
                </span>
              </Link>
            
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
