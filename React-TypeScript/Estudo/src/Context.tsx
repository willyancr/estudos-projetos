import { useUser } from './UserContext';

const Context = () => {
  const { data } = useUser();
  return (
    <div>
      <p>{data?.preferencias.volume}</p>
    </div>
  );
};

export default Context;
