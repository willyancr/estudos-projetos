import React from 'react';
import Produtos from './Produtos';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  async function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <>
      <h2>Preferência: {produto}</h2>
      <button onClick={handleClick} style={{ marginRight: '10px' }}>
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Produtos produto={produto} />
    </>
  );
};

export default App;
