import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produtos from './Produtos';

const App = () => {
  return (
    <GlobalStorage>
      <Produtos />
    </GlobalStorage>
  );
};

export default App;
