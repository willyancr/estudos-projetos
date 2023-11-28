import React from 'react';

const Input = ({ label, id, type, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Input;
