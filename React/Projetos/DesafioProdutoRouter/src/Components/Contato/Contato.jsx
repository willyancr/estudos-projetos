import './Contato.css';
import { Helmet } from 'react-helmet';

const Contato = () => {
  return (
    <div className="contato">
      <Helmet>
        <title>Ranek | Contato</title>
      </Helmet>
      <img src="../image/contato.png" alt="imagem de um contato" />
      <div className="informacoes">
        <h2>Entre em contato.</h2>
        <p>
          <span></span> willyancr@gmail.com
        </p>
        <p>
          <span></span> (63) 98453-3367
        </p>
        <p>
          <span></span> Palmas - TO
        </p>
      </div>
    </div>
  );
};

export default Contato;
