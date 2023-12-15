import './ProdutoDescricao.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProdutoDescricao = () => {
  const { id } = useParams();
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function dadosRanek() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`,
        );
        const json = await response.json();
        setDados(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    dadosRanek();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (dados === null) return null;
  return (
    <div>
      <Helmet>
        <title>Ranek | {dados.nome}</title>
      </Helmet>
      <div className="produtoDescricao">
        <img src={dados.fotos[0].src} alt="" />
        <div>
          <h2>{dados.nome}</h2>
          <p className="produtoDescricaoPreco">R$ {dados.preco}</p>
          <p>{dados.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDescricao;
