import styles from "./AddPet.module.css";
import api from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessages from "../../hooks/UseFlashMessage";
import PetForm from "../../components/form/PetForm";
function AddPet() {
  const navigate = useNavigate();
  const { setFlashMessages } = useFlashMessages();
  const [token] = useState(localStorage.getItem("token") || "");

  async function registerPet(pet) {
    let msgType = "sucess";
    const formData = new FormData();

    await Object.keys(pet).forEach((key) => {
      if (key === "images") {
        for (let i = 0; i < pet[key].length; i++) {
          formData.append("images", pet[key][i]);
        }
      } else {
        formData.append(key, pet[key]);
      }
    });
    console.log(formData);
    const data = await api
      .post("pets/create", formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(msgType);
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        msgType = "error";
        console.log(msgType);
        return error.response.data;
      });

    setFlashMessages(data.message, msgType);
    if (msgType !== "error") {
      navigate("/pets/mypets");
    }
  }
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <PetForm handleSubmit={registerPet} btnText="Cadastrar" />
    </section>
  );
}

export default AddPet;
