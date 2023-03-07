import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './formSchema';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterUser, UserContext } from '../../../contexts/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  const submit: SubmitHandler<IRegisterUser> = (data) => {
    userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Nome'
        type='text'
        placeholder='Digite aqui seu nome'
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Email'
        type='email'
        placeholder='Digite aqui seu email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Senha'
        register={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirmar de Senha'
        type='password'
        placeholder='Confirmar senha'
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
