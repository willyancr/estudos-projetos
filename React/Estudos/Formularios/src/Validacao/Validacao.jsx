import React from 'react';
import Input from '../Forms/Inputs/Input';
import useForm from '../Hooks/useForm';

const Validacao = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log(' Não Enviar');
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" id="nome" type="text" {...nome} />
        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="0000-000"
          {...cep}
        />
        <Input label="Email" id="email" type="email" {...email} />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Validacao;
