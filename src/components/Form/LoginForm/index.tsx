import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formSchema';
import { ILoginUser, UserContext } from '../../../contexts/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<ILoginUser> = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        placeholder='Digite aqui seu email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type= 'password'
        placeholder='Digite aqui sua senha'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
