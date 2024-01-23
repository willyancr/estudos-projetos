import React, { useState } from 'react';
import styles from './Feed.module.css';
import Modal from './Modal';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';

const Feed = () => {
  // estado para controlar a visibilidade do modal e as visualizações selecionadas
  const [showModal, setShowModal] = useState(false);
  const [selectedViews, setSelectedViews] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const { error, loading, request, data } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
      console.log(response);
    }
    fetchPhotos();
  }, [request]);

  // função para lidar com o clique em uma imagem e mostrar o modal com visualizações
  function handleClickImage(acessos, photo) {
    setShowModal(true);
    setSelectedViews(acessos);
    setSelectedPhoto(photo);
  }
  // função para lidar com o fechamento do modal
  function handleCloseImage() {
    setShowModal(false);
  }
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    // renderizar a lista de imagens com visualizações
    return (
      <section>
        <div className={`${styles.home} container efeito`}>
          <ul className={styles.ulFeed}>
            {data.map((photo) => (
              <div
                onClick={() => handleClickImage(photo.acessos, photo.src)}
                className={styles.imageDogsFeed}
                key={photo.id}
              >
                <li>
                  <img src={photo.src} alt={photo.title} />
                </li>
                <span className={styles.views}>
                  <i
                    className="fa-regular fa-eye"
                    style={{ color: '#fff' }}
                  ></i>{' '}
                  {photo.acessos}
                </span>
              </div>
            ))}
            {showModal && (
              <Modal
                onClose={handleCloseImage}
                views={selectedViews}
                photo={selectedPhoto}
              />
            )}
          </ul>
        </div>
      </section>
    );
  else return null;
};

export default Feed;
