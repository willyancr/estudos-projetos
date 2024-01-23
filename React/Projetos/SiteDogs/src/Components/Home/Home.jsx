import React, { useState } from 'react';
import styles from './Home.module.css';
import Modal from './Modal';

// Componente Home que exibe uma lista de imagens de cachorros com visualizações

const Home = () => {
  // array de objetos de imagem com src e número aleatório de visualizações
  const images = Array.from({ length: 6 }, () => ({
    src: '../image/dog.jpg',
    views: Math.random() * 1000,
  }));

  // estado para controlar a visibilidade do modal e as visualizações selecionadas
  const [showModal, setShowModal] = useState(false);
  const [selectedViews, setSelectedViews] = useState(null);

  // função para lidar com o clique em uma imagem e mostrar o modal com visualizações
  function handleClickImage(views) {
    setShowModal(true);
    setSelectedViews(views);
  }

  // função para lidar com o fechamento do modal
  function handleCloseImage() {
    setShowModal(false);
  }

  // renderizar a lista de imagens com visualizações
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
      {showModal && (
        <Modal onClose={handleCloseImage} views={selectedViews.toFixed(0)} />
      )}
    </section>
  );
};

export default Home;
