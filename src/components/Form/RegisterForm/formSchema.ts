import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, "A senha precisa ter no mínimo 8 caracteres"),
  confirmPassword: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
});