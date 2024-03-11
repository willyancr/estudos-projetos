import * as React from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const [total, setTotal] = React.useState(0);

  function handleClick() {
    setTotal(total + 1);
  }
  return (
    <>
      <div>
        <p>Total:{total}</p>
        <Button onClick={handleClick} tamanho="2rem">
          Somar
        </Button>
      </div>
      <div>
        <Input
          type="password"
          htmlFor="password"
          name="password"
          id="password"
          style={{ marginTop: '1rem' }}
        >
          Digite sua senha:
        </Input>
      </div>
    </>
  );
}

export default App;
