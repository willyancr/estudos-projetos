import React from 'react';
import FeedPhoto from './FeedPhotos';
import Modal from './Modal';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {/* Exibir modal se modalPhoto não for nulo */}
      {modalPhoto && (
        <Modal photo={modalPhoto} onClose={() => setModalPhoto(null)} />
      )}
      {/* Componente para exibir fotos do feed */}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
