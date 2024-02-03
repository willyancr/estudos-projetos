import React from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import FeedPhotoItem from './FeedPhotoItem';
import Loading from '../../Helper/Loading';

// Componente para exibir um feed de fotos
const FeedPhoto = ({ setModalPhoto, user }) => {
  const { error, loading, request, data } = useFetch();

  //Buscar fotos quando o componente é montado
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user });
      await request(url, options);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  // Exibir feed de fotos
  return data ? (
    <section>
      <div className={`${styles.home} container efeito`}>
        <ul className={styles.ulFeed}>
          {data.map((photo) => (
            <FeedPhotoItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </div>
    </section>
  ) : null;
};

export default FeedPhoto;
