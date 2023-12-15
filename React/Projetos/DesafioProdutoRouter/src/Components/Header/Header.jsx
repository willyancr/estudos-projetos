import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return ( 
    <nav>
      <NavLink
        to="/"
        end
        activeStyle={{ background: '#969696' }}
        className="navlink"
      >
        Produtos
      </NavLink>
      <NavLink to="contato" className="navlink">
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
