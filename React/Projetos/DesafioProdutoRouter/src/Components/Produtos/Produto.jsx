import React from 'react';
import './Produto.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function dadosRanek() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto`,
      );
      const json = await response.json();
      setDados(json);
    }
    dadosRanek();
  }, []);

  return (
    <div>
      <nav className="container">
        {dados &&
          dados.map((produto) => (
            <Link
              key={produto.id}
              to={`produto/${produto.id}`}
              className="produtos"
            >
              <img src={produto.fotos[0].src} alt="" />
              <h3>{produto.nome}</h3>
            </Link>
          ))}
      </nav>
    </div>
  );
};

export default Produto;
