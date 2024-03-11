import * as React from 'react';
import Button from './Button';

function App() {
  const [total, setTotal] = React.useState(0);

  function handleClick() {
    setTotal(total + 1);
  }
  return (
    <div>
      <p>Total:{total}</p>
      <Button onClick={handleClick} tamanho="2rem">
        Somar
      </Button>
    </div>
  );
}

export default App;
