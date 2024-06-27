import Input from "../../components/form/Input";

function Register() {
  function handleOnChange(e) {}
  return (
    <section>
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
        <Input type='submit' value='cadastrar'/>
      </form>
    </section>
  );
}

export default Register;
