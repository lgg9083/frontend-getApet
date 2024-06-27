import Input from "../../components/form/Input";
import style from "../../components/form/Form.module.css";
import { Link } from "react-router-dom";
function Register() {
  function handleOnChange(e) {}
  return (
    <section className={style.form_container}>
      <h1>Register</h1>
      <form>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Phone"
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Email"
          type="text"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleOnChange}
        />
        <Input
          text="Cofirmação de senha"
          type="password"
          name="confirmPassword"
          placeholder="Confirme a sua senha "
          handleOnChange={handleOnChange}
        />
        <Input type="submit" value="cadastrar" />
      </form>
      <p>
        Já tem conta ? <Link to="/login"> clique aqui!</Link>
      </p>
    </section>
  );
}

export default Register;
