import styles from "./AddPet.module.css";
import api from "../../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFlashMessages from "../../hooks/UseFlashMessage";
function AddPet() {
  const navigate = useNavigate();
  const { setFlashMessages } = useFlashMessages();
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um Pet</h1>
        <p>Depois ele ficará disponível para adoção</p>
      </div>
      <p>formulário</p>
    </section>
  );
}

export default AddPet;
