import React from 'react';
import styles from './Home.module.css';

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
            <div className={styles.imageDogsFeed}>
              <li>
                <img src={image.src} alt="" />
              </li>
              <span className={styles.views}>
                <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
                {image.views.toFixed(1)}
              </span>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.modal}>
        <div>
          <img src="../image/dog.jpg" alt="" />
        </div>
        <div>
          <p>
            <a href="">@cat</a>
            <span>
              <i className="fa-regular fa-eye"></i> 21568
            </span>
          </p>
          <h1>Ellie</h1>
          <ul>
            <li>| 5 kg</li>
            <li>| 09 anos</li>
          </ul>
        </div>
        <ul>
          <li>
            <b>cat:</b>
            <span>Linda essa dogzinha</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
