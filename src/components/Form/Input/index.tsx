import { UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput{
  label: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder: string;
}

const Input = ({label, type, register, error, placeholder}:IInput) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} placeholder={placeholder}/>
    {error && <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>}
  </fieldset>
);

export default Input;
