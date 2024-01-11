export const url = 'https://dogsapi.origamid.dev/json';

//Retorna o objeto de configuração para fazer uma requisição POST para o endpoint de token.
export const TOKEN_POST = (body) => {
  return {
    url: url + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

//Gera um objeto de configuração de requisição GET para recuperar os dados do usuário.
export const USER_GET = (token) => {
  return {
    url: url + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};
