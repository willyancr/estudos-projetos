import React from 'react';

type LabelProps = React.ComponentProps<'label'>;
type InputProps = React.ComponentProps<'input'>;

const Input = ({ children, ...props }: InputProps & LabelProps) => {
  return (
    <div>
      <label  {...props}>{children}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
