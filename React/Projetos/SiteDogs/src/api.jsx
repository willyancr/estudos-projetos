export const url = 'https://dogsapi.origamid.dev/json';

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
