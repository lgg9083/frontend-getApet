import styles from "./profile.module.css";
import formStyles from "../../components/form/Form.module.css";
import Input from "../../components/form/Input";
import { useState, useEffect, useContext } from "react";

function Profile() {
  const [user, setUser] = useState({});

  function onFileChange() {
    return;
  }
  function handleChange() {
    return;
  }
  return (
    <section>
      <div className={styles.profile_container}>
        <h1>Perfil</h1>
        <p>Previw de imagem </p>
      </div>
      <form className={formStyles.form_container}>
        <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />
        <Input
          text="Email"
          type="text"
          name="email"
          placeholder="Digite o seu email"
          handleOnChange={handleChange}
          value={user.email || ""}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
          value={user.name || ""}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.telefone || ""}
        />
        <Input
          text="senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="senha"
          type="password"
          name="confirmPassword"
          placeholder="confirme a sua senha"
          handleOnChange={handleChange}
        />
        <Input type="submit" value="Editar" />
      </form>
    </section>
  );
}

export default Profile;
