import React from 'react';
import styles from './Modal.module.css';
import { COMMENT_POST } from '../../api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';

const PhotoComment = ({ id, comments }) => {
  const [comment, setComment] = React.useState('');
  const [commentsList, setCommentsList] = React.useState(() => comments);
  const { login } = React.useContext(UserContext);
  const { error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setCommentsList((comments) => [...comments, json]);
      setComment('');
    }
  }
  return (
    <>
      {/* Comentarios */}
      <ul className={styles.modalComments}>
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {/* Enviar comentario */}
      {login ? (
        <form onClick={handleSubmit} className={styles.modalSendMsg}>
          <textarea
            name="comment"
            id="comment"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
            placeholder="Comente..."
          ></textarea>
          <button>
            <i className="fa-solid fa-square-arrow-up-right fa-2xl"></i>
          </button>
        </form>
      ) : (
        <form className={styles.modalSendMsg}>
          <textarea
            placeholder="Faça o login para comentar..."
            disabled
          ></textarea>
          <Link to="/login">
            <button >
            <i className="fa-solid fa-user fa-2xl"></i>
            </button>
          </Link>
        </form>
      )}
    </>
  );
};

export default PhotoComment;
