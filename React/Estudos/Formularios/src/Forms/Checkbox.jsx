import React, { useState } from 'react';

const checkboxFields = [
  'azul',
  'roxo',
  'laranja',
  'verde',
  'vermelho',
  'cinza',
];
const Checkbox = () => {
  const [cores, setCores] = useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter(cor => cor !== target.value))
    }
  }
  console.log(cores)
  function handleChecked(cor) {
    return cores.includes(cor);
  }
  return (
    <form>
      {checkboxFields.map((field) => (
        <div key={field}>
          <label htmlFor={field}>
            <input
              id={field}
              type="checkbox"
              value={field}
              checked={handleChecked( field )}
              onChange={handleChange}
            />{' '}
            {field}
          </label>
        </div>
      ))}
    </form>
  );
};

export default Checkbox;
