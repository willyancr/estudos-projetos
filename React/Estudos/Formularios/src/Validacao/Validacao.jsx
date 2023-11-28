import React, { useState } from 'react';
import Input from '../Forms/Inputs/Input';

const Validacao = () => {
  const [cep, setCep] = useState('');
  const [msg, setMsg] = useState('');
  const [send, setSend] = useState('');

  function validacaoCEP(value) {
    if (value.length === 0) {
      setMsg('Preencha o CEP');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setMsg('Cep Invalido');
      return false;
    } else {
      setMsg('');
      return true;
    }
  }
  function handleBlur({ target }) {
    validacaoCEP(target.value);
  }

  function handleChange({ target }) {
    if (msg) validacaoCEP(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validacaoCEP(cep)) {
      setSend('Cep enviado');
    } else {
      setSend('Cep não enviado');
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          value={cep}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0000-000"
        />
        <p>{msg}</p>
        <button>Enviar</button>
        <p>{send}</p>
      </form>
    </>
  );
};

export default Validacao;
