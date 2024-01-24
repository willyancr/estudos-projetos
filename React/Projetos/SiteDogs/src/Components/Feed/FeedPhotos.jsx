import React, { useState } from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import FeedPhotoItem from './FeedPhotoItem';
import Modal from './Modal';


const FeedPhoto = () => {
  // estado para controlar a visibilidade do modal e as visualizações selecionadas
  const [modalInfo, setModalInfo] = useState({
    showModal: false,
    acessos: null,
    photo: null,
    idade: null,
    peso: null,
    autor: null,
    titulo: null,
  });

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
  function handleClickImage(photo) {
    setModalInfo({
      showModal: true,
      acessos: photo.acessos,
      photo: photo.src,
      idade: photo.idade,
      peso: photo.peso,
      autor: photo.author,
      titulo: photo.title,
    });
    console.log(photo)
  }
  // função para lidar com o fechamento do modal
  function handleCloseImage() {
    setModalInfo({
      showModal: false,
    });
  }
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  // renderizar a lista de imagens com visualizações
  return data ? (
    <section>
      <div className={`${styles.home} container efeito`}>
        <ul className={styles.ulFeed}>
          {data.map((photo) => (
            <FeedPhotoItem
              key={photo.id}
              photo={photo}
              onClick={() => handleClickImage(photo)}
            />
          ))}
        </ul>
      </div>
      {modalInfo.showModal && <Modal onClose={handleCloseImage} {...modalInfo}/>}
    </section>
  ) : null;
};

export default FeedPhoto;
