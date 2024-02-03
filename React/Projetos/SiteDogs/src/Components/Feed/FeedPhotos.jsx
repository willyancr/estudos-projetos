import React from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import FeedPhotoItem from './FeedPhotoItem';
import Loading from '../../Helper/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

// Componente para exibir um feed de fotos
const FeedPhoto = ({ setModalPhoto, user }) => {
  const [page, setPage] = React.useState(1); //controlar a página atual de fotos
  const [hasMore, setHasMore] = React.useState(true); //determinar se há mais fotos para carregar
  const [photos, setPhotos] = React.useState([]); //armazenar o array de fotos

  const { error, loading, request } = useFetch();

  //Buscar fotos quando o componente é montado ou quando a página é atualizada
  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      // Se a resposta for OK, verifica se há mais fotos para carregar
      if (response && response.ok) { 
        setPhotos((photos) => [...photos, ...json]);
        if (json.length < total) setHasMore(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

  const fetchMorePhotos = async () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <p>{error}</p>;
  // if (loading) return <Loading />;
  // Exibir feed de fotos
  return (
    <section>
      <div className={`${styles.home} container efeito`}>
        <InfiniteScroll
          dataLength={photos.length} // Comprimento atual da lista de fotos
          next={fetchMorePhotos} // Função para carregar mais fotos
          hasMore={hasMore} // Se ainda há mais fotos para carregar
          loader={<p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic' }}> Carregando mais fotos...</p>}
          // endMessage={<h4 style={{ textAlign: 'center' }}>Acabou as fotos</h4>}
        >
          <ul className={styles.ulFeed}>
            {photos &&
              photos.map((photo) => (
                <FeedPhotoItem
                  key={photo.id}
                  photo={photo}
                  setModalPhoto={setModalPhoto}
                />
              ))}
          </ul>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default FeedPhoto;
