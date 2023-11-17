import React from 'react';
import Input from './Input';
import Button from './Button';

const Forms = () => {
  return (
    <form action="">
      <p>
        <label htmlFor="nome">Nome:</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email:</label>
        <Input />
      </p>
      <Button />
    </form>
  );
};

export default Forms;
