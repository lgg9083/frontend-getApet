import api from "../../utils/api";
import { useState, useEffect } from "react";
import styles from "./AddPet.module.css";
import { useParams } from "react-router-dom";
import PetForm from "../../components/form/PetForm";
import useFlashMessages from "../../hooks/UseFlashMessage";
function EditPet() {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  const { id } = useParams();
  const { setFlashMessages } = useFlashMessages();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPet(response.data.pet);
      });
  }, [token, id]);
  async function updatedPet(pet) {
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

    const data = await api
      .patch(`pets/${pet._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessages(data.message, msgType);
  }
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet : {pet.name}</h1>
        <p>Depois da edição os dado serão atualizados no sistema</p>
      </div>
      {pet.name && (
        <PetForm handleSubmit={updatedPet} btnText="Atualizar" petData={pet} />
      )}
    </section>
  );
}

export default EditPet;
