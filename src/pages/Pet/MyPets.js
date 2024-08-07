import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import RoundImage from "../../components/layouts/RoundedImage";
import useFlashMessages from "../../hooks/UseFlashMessage";
import styles from "./Dashboard.module.css";
function MyPets() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");
  const { setFlashMessages } = useFlashMessages();

  useEffect(() => {
    api
      .get("/pets/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(token);
        setPets(response.data.pets);
      });
  }, [token]);

  async function removePet(id) {
    let msgType = "sucess";

    const data = await api
      .delete(`/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        const updatedPets = pets.filter((pet) => pet._id != id);
        setPets(updatedPets);
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });
    setFlashMessages(data.message, msgType);
  }

  async function concludeAdpotion(id) {
    let msgType = "sucess";

    const data = await api
      .patch(
        `/pets/concludes/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
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
      <div className={styles.petlist_header}>
        <h1>MyPets</h1>
        <Link to="/pets/add">Cadastrar Pet</Link>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row}>
              <RoundImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    {console.log(pet)}
                    {pet.adpoter && (
                      <button
                        className={styles.conclude_btn}
                        onClick={() => {
                          concludeAdpotion(pet._id);
                        }}
                      >
                        concluir adução
                      </button>
                    )}
                    <Link to={`/pets/edit/${pet._id}`}>Editar</Link>
                    <button onClick={() => removePet(pet._id)}> Excluir</button>
                  </>
                ) : (
                  <p>Pet ja Adotado</p>
                )}{" "}
              </div>
            </div>
          ))}
        {pets.length === 0 && <p> Não há Pets cadastrados</p>}
      </div>
    </section>
  );
}

export default MyPets;
