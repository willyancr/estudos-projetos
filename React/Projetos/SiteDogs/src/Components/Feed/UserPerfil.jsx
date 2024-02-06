import React from 'react';
import styles from './UserPerfil.module.css';
import { useParams } from 'react-router-dom';
import Feed from './Feed';

const UserPerfil = () => {
  const { user } = useParams();

  return (
    <section className={`${styles.user} container`}>
      <h1 className="title">
        <span></span>
        Album | @{user}
      </h1>
      <Feed user={user} />
    </section>
  );
};

export default UserPerfil;
