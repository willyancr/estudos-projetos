import React from 'react';
import Produtos from './Desafio/Produtos';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }
  return (
    <>
      <button onClick={handleClick} style={{ margin: '10px' }}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ margin: '10px' }}>
        Smartphone
      </button>
      <button onClick={handleClick} style={{ margin: '10px' }}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produtos dados={dados} />}
    </>
  );
};

export default App;
