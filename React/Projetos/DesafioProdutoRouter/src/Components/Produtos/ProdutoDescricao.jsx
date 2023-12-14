import './ProdutoDescricao.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProdutoDescricao = () => {
  const { id } = useParams();
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function dadosRanek() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${id}`,
      );
      const json = await response.json();
      setDados(json);
    }
    dadosRanek();
  }, [id]);

  return (
    <div>
      <Helmet>
        <title>Ranek | Produtos Infos</title>
      </Helmet>
      
      {dados && (
        <div className="produtoDescricao">
          <img src={dados.fotos[0].src} alt="" />
          <div>
            <h2>{dados.nome}</h2>
            <p className="produtoDescricaoPreco">R$ {dados.preco}</p>
            <p>{dados.descricao}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdutoDescricao;
