import React, { useState } from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep invalido',
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Email invalido',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
