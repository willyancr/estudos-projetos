import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  //Obtém os dados do usuário do servidor usando um token.
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json); // Atualiza os dados do usuário com o JSON obtido
    setLogin(true); // Define o status de login como true
  }
  //Faz a autenticação de um usuário com o nome de usuário e senha fornecidos.
  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password }); 
    const response = await fetch(url, options); 
    const { token } = await response.json(); // Faz o parse da resposta JSON para obter o token.
    getUser(token); 
  }

  return (
    <UserContext.Provider value={userLogin}>{children}</UserContext.Provider>
  );
};
