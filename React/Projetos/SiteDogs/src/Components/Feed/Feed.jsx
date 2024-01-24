import React from 'react';
import FeedPhoto from './FeedPhotos';
import Modal from './Modal';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalPhoto && (
        <Modal photo={modalPhoto} onClose={() => setModalPhoto(null)} />
      )}
      <FeedPhoto setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
