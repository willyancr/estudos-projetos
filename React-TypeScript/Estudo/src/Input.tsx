import React from 'react';

type LabelProps = React.ComponentProps<'label'>;
type InputProps = React.ComponentProps<'input'> & {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ children, setState, ...props }: InputProps & LabelProps) => {
  return (
    <div>
      <label {...props}>{children}</label>
      <input onChange={(e) => setState(e.target.value)} {...props} />
    </div>
  );
};

export default Input;
