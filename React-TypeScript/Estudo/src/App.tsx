import * as React from 'react';
import Input from './Input';

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
};

function App() {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');
  const [date, seteDate] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    if (inicio && final) {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((res) => res.json())
        .then((json) => seteDate(json));
    }
  }, [inicio, final]);

  return (
    <>
      <div>
        <Input type="date" value={inicio} setState={setInicio}>
          {' '}
          Início:{' '}
        </Input>
        <Input type="date" value={final} setState={setFinal}>
          {' '}
          final:{' '}
        </Input>
      </div>
      <div>
        {date &&
          date.map((venda) => (
            <p key={venda.id}>
              {venda.nome}: {venda.status}
            </p>
          ))}
      </div>
    </>
  );
}

export default App;
