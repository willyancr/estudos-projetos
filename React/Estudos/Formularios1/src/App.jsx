import React, { useState } from 'react';
import Radio from './Forms/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(
      `Você acertou ${corretas.length} das ${perguntas.length} perguntas.`,
    );
  }

  function handleNext() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }
  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }
  function voltarSlideInicio() {
    setSlide(0);
    setRespostas({
      p1: '',
      p2: '',
      p3: '',
      p4: '',
    });
    setResultado(null);
  }
  return (
    <>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <div>
          <p>{resultado}</p> <button onClick={voltarSlideInicio}>Inicio</button>
        </div>
      ) : (
        <button onClick={handleNext}>Próxima</button>
      )}
    </>
  );
};

export default App;
