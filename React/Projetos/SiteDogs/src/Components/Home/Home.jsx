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
  const [selectdedViews, setSelectdedViews] = useState(null);

  function handleClickImage(views) {
    setShowModal(true);
    setSelectdedViews(views);
  }
  function handleCloseImage() {
    setShowModal(false);
  }

  return (
    <section>
      <div className={`${styles.home} container efeito`}>
        <ul className={styles.ulFeed}>
          {images.map((image, index) => (
            <div
              onClick={() => handleClickImage(image.views)}
              className={styles.imageDogsFeed}
              key={index}
            >
              <li>
                <img src={image.src} alt="" />
              </li>
              <span className={styles.views}>
                <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
                {image.views.toFixed(0)}
              </span>
            </div>
          ))}
        </ul>
      </div>
      {showModal && <Modal onClose={handleCloseImage} views={selectdedViews.toFixed(0)} />}
    </section>
  );
};

export default Home;
