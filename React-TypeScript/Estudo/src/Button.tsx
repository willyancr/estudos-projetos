import React from 'react';

type ButtonPros = React.ComponentProps<'button'> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, ...props }: ButtonPros) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
