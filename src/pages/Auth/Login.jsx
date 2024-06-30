import { useState, useContext } from "react";
import Input from "../../components/form/Input";
import styles from "../../components/form/Form.module.css";
import { context } from "../../context/UserContext";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }
  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />

        <Input type="submit" value="Entrar" />
      </form>

      <p>
        Não tem conta? <Link to="/register">Clique aqui!</Link>
      </p>
    </section>
  );
}

export default Login;
