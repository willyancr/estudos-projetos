import React from 'react';

const Select = ({ options, value, setvalue }) => {
  return (
    <form>
      <select value={value} onChange={({ target }) => setvalue(target.value)}>
        <option value="" disabled>
          Selecione
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
