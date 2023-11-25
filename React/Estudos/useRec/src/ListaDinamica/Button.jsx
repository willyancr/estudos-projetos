import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Button = ({ text, onClick, style }) => {
  const { appStyle } = useContext(ThemeContext);
  const mergedStyles = { ...appStyle, ...style };

  return (
    <>
      <button onClick={onClick} style={mergedStyles}>
        {text}
      </button>
    </>
  );
};

export default Button;
