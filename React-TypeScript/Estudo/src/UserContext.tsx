import React from 'react';
import useFetch from './useFetch';

type Usuario = {
  id: number;
  nome: string;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};
type UserContextValue = {
  data: Usuario | null;
  loading: boolean;
  error: null | string;
};
const UserContext = React.createContext<UserContextValue | null>(null);
export const useUser = () => {
  const context = React.useContext(UserContext);
  return context;
};
const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<Usuario>(
    'https://data.origamid.dev/usuarios/1',
  );
  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
