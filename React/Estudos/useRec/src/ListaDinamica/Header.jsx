import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

const Header = ({ onAdd }) => {
  const global = useContext(ThemeContext);
  return (
    <>
      <h1>Produtos</h1>
      <Button onClick={onAdd} text={'Adicionar'} />
      <Button
        text={'Tema Botão'}
        onClick={() => global.handleTheme()}
        style={{ ...global.appStyle, marginLeft: '500px' }}
      />
      <hr />
    </>
  );
};

export default Header;
