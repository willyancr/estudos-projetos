import React from 'react';
import './Produto.css';
import { Link } from 'react-router-dom';

const Produto = () => {
  return (
    <div>
      <nav className="container">
        <Link to="/produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
        <Link to="produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
        <Link to="produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
        <Link to="produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
        <Link to="produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
        <Link to="produto" className="produtos">
          <img
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Produto</h3>
        </Link>
      </nav>
      
    </div>
  );
};

export default Produto;
