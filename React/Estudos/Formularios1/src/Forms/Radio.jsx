import React from 'react';

const Radio = ({ pergunta, id, options, onChange, active, value }) => {
  if (active === false) return null;
  return (
    <fieldset style={{ marginBottom: '1rem' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ fontFamily: 'monospace', marginBottom: '1rem' }}
        >
          <input
            id={id}
            value={option}
            checked={value === option}
            onChange={onChange}
            type="radio"
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
