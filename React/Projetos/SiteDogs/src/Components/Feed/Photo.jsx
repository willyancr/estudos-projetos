import React from 'react';
import styles from './Photo.module.css';
import { useParams } from 'react-router-dom';
import PhotoContent from './PhotoContent';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';

const Photo = () => {
  const { id } = useParams();
  const { data, request, error } = useFetch();
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <h1>{error}</h1>;
  if (data)
    return (
      <section className={styles.photo}>
        <PhotoContent dados={data} />
      </section>
    );
};

export default Photo;
