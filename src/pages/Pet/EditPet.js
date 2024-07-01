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
  async function updatedPet(pet) {}
  return (
    <section>
      <div className={styles.adpoter_header00000}>
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
