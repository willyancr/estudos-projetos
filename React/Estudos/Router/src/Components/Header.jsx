import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const activeStyle = {
    color: 'tomato',
  };
  return (
    <nav>
      <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
        Home
      </NavLink>{' '}
      {' | '}
      <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>
        Sobre
      </NavLink>
      {' | '}
      <NavLink to="login" activeStyle={{ color: 'tomato' }}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
