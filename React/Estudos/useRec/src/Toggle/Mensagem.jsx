import React from 'react';

const Mensagem = () => {
  const [visible, setVisible] = React.useState(false);

  function handleClick() {
    setVisible(!visible);
  }
  return (
    <>
      {visible && <p>Essa mensagem está visivel</p>}
      <button onClick={handleClick}>
        {visible ? 'Ocultar Mensagem' : 'Mostrar Mensagem'}
      </button>
    </>
  );
};

export default Mensagem;
