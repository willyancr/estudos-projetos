import React, { useState } from 'react';
import styles from './Home.module.css';
import Modal from './Modal';

const Home = () => {
  const images = [
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
    { src: '../image/dog.jpg', views: Math.random() * 1000 },
  ];
  const [showModal, setShowModal] = useState(false);

  function handleClickImage() {
    setShowModal(true);
  }
  function handleCloseImage() {
    setShowModal(false);
  }

  return (
    <section>
      <div className={`${styles.home} container efeito`}>
        <ul className={styles.ulFeed}>
          {images.map((image) => (
            <div onClick={handleClickImage} className={styles.imageDogsFeed}>
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
      {showModal && <Modal onClose={handleCloseImage} />}
    </section>
  );
};

export default Home;
