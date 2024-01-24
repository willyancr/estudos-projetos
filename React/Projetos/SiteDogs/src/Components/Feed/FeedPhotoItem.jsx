import React from 'react';
import styles from './FeedPhotos.module.css';

const FeedPhotoItem = ({ photo, onClick }) => {
  return (
    <div onClick={onClick} className={styles.imageDogsFeed}>
      <li>
        <img src={photo.src} alt={photo.title} />
      </li>
      <span className={styles.views}>
        <i className="fa-regular fa-eye" style={{ color: '#fff' }}></i>{' '}
        {photo.acessos}
      </span>
    </div>
  );
};

export default FeedPhotoItem;
