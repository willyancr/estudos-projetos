import React from 'react';

const Input = ({ label, id, type, value, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} value={value} {...props} />
    </>
  );
};

export default Input;
