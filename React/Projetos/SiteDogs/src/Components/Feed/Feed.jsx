import React from 'react';
import FeedPhoto from './FeedPhotos';
import Modal from './Modal';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [page, setPage] = React.useState(1); //controlar a página atual de fotos
  const [hasMore, setHasMore] = React.useState(true); //determinar se há mais fotos para carregar
  const [photos, setPhotos] = React.useState([]); //armazenar o array de fotos
  const { error, request } = useFetch();

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
    fetchPhotos()
  }, [request, user, page]);

  const fetchMorePhotos = async () => {
    setPage((prevPage) => prevPage + 1);
  };
  if (error) return <p>{error}</p>;
  return (
    <div>
      {/* Exibir modal se modalPhoto não for nulo */}
      {modalPhoto && (
        <Modal photo={modalPhoto} onClose={() => setModalPhoto(null)} />
      )}
      {/* Componente para exibir fotos do feed */}
      <InfiniteScroll
        dataLength={photos.length} // Comprimento atual da lista de fotos
        next={fetchMorePhotos} // Função para carregar mais fotos
        hasMore={hasMore} // Se ainda há mais fotos para carregar
        loader={
          <p
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              fontStyle: 'italic',
            }}
          >
            {' '}
            Carregando mais fotos...
          </p>
        }
      >
        {page.map((item) => (
          <FeedPhoto
            key={item}
            user={user}
            photos={photos}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Feed;
