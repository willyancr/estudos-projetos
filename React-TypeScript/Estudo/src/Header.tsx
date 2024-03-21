import React from 'react';
import { useUser } from './UserContext';

const Header = () => {
  const { data } = useUser();
  if(!data) return null
  return (
    <div>
      <h1>{data.nome}</h1>
      teste
    </div>
  );
};

export default Header;
