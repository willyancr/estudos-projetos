import React from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import FeedPhotoItem from './FeedPhotoItem';
import Loading from '../../Helper/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

// Componente para exibir um feed de fotos
const FeedPhoto = ({ setModalPhoto, user }) => {
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const { error, loading, request, data } = useFetch();

  //Buscar fotos quando o componente é montado
  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok) {
        if (json.length < total) setHasMore(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

  const fetchMorePhotos = () => {
    setPage((prevPages) => prevPages + 1);
  };

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  // Exibir feed de fotos
  return (
    <section>
      <div className={`${styles.home} container efeito`}>
        <InfiniteScroll
          dataLength={data?.length || 0}
          next={fetchMorePhotos}
          hasMore={hasMore}
          loader={<h4 style={{ textAlign: 'center' }}> Carregando mais fotos...</h4>}
        >
          <ul className={styles.ulFeed}>
            {data &&
              data.map((photo) => (
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
