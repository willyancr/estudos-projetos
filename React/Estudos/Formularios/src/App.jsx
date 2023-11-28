import React, { useState } from 'react';
import Inputs from './Inputs/Inputs';
import Checkbox from './CheckBox/Checkbox';
import Select from './Select/Select';
import Input from './Inputs/Input';

const App = () => {
  const [cep, setCep] = useState('');
  return (
    <>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        setValue={setCep}
        placeholder="0000-000"
      />
    </>
  );
};

export default App;
