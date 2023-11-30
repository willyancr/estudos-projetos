import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    usuario: yup.string().required('Usuário obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    senha: yup
      .string()
      .min(6, 'No mínimo 6 digitos')
      .required('Senha obrigatório'),
    confirmeSenha: yup
      .string()
      .required('Confirmar a senha é obrigatório')
      .oneOf([yup.ref('senha')], 'As senhas devem ser iguais'),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(userDate) {
    console.log(userDate);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre seu Login</h1>

        <label htmlFor="usuario">Usuario</label>
        <input type="text" id="usuario" {...register('usuario')} />
        <span>{errors.usuario?.message}</span>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register('email')} />
        <span>{errors.email?.message}</span>

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Minimo 6 digitos"
          {...register('senha')}
        />
        <span>{errors.senha?.message}</span>

        <label htmlFor="confirmeSenha">Confirme Senha</label>
        <input
          type="password"
          id="confirmeSenha"
          {...register('confirmeSenha')}
        />
        <span>{errors.confirmeSenha?.message}</span>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
