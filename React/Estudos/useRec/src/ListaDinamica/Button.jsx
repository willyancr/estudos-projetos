import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Button = ({ text, onClick, style }) => {
  const global = useContext(ThemeContext);
  const mergedStyles = { ...global.appStyle, ...style };
  return (
    <>
      <button onClick={onClick} style={mergedStyles}>
        {text}
      </button>
    </>
  );
};

export default Button;
