import React from 'react';
import './Contato.css';
const Contato = () => {
  return (
    <div className="contato">
      <img
        src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="informacoes">
        <h2>Entre em contato.</h2>
        <p>
          <span></span> willyancr@gmail.com
        </p>
        <p>
          <span></span> (63) 98453-3367
        </p>
        <p>
          <span></span> Palmas - TO
        </p>
      </div>
    </div>
  );
};

export default Contato;
