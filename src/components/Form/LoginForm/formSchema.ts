import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});