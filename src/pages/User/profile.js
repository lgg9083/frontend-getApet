import styles from "./profile.module.css";
import formStyles from "../../components/form/Form.module.css";
import Input from "../../components/form/Input";
import { useState, useEffect, useContext } from "react";
import api from "../../utils/api";
import useFlashMessages from "../../hooks/UseFlashMessage";
function Profile() {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const [preview, setPreview] = useState("");
  const { setFlashMessages } = useFlashMessages();
  useEffect(() => {
    api
      .get("/user/checkUser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    let msgType = "sucess";
    const formData = new FormData();

    const userFormData = await Object.keys(user).forEach((key) =>
      formData.append(key, user[key])
    );

    const data = await api
      .patch(`user/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        msgType = "error";
        console.log(error);
        return error.response.data;
      });
    setFlashMessages(data.message, msgType);
  }
  return (
    <section>
      <div className={styles.profile_container}>
        <h1>Perfil</h1>
        {(user.imagem || preview) && (
          <img
            src={preview ? URL.createObjectURL(preview) : ""}
            alt={preview}
          />
        )}
        <p>Previw de imagem </p>
      </div>
      <form onSubmit={handleSubmit} className={formStyles.form_container}>
        <Input
          text="Imagem"
          type="file"
          name="imagem"
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
          value={user.phone || ""}
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
