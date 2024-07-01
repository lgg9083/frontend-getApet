import api from "../../utils/api";
import { useState, useEffect } from "react";
import styles from "./AddPet.module.css";

import PetForm from "../../components/form/PetForm";
import useFlashMessages from "../../hooks/UseFlashMessage";
function EditPet() {
  const [pet, setPet] = useState({});
  return (
    <section>
      <div className={styles.adpoter_header00000}>
        <h1>Editando o Pet : {pet.nome}</h1>
        <p>Depois da edição os dado serão atualizados no sistemas</p>
      </div>
    </section>
  );
}

export default EditPet;
