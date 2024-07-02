import api from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import RoundImage from "../../components/layouts/RoundedImage";
function MyAdoptions() {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadpotions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
        console.log(pets);
      });
  }, [token]);
  return (
    <section>
      <div className={styles.petlist_header}>
        <h1> minhas adoções</h1>
      </div>
      <div className={styles.petlist_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div className={styles.petlist_row} key={pet.id}>
              <RoundImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />
              <span className="bold">{pet.name}</span>
              <div className={styles.contacts}>
                <p>
                  <span className="bold">Ligue para: </span>
                  {pet.user.phone}
                </p>
                <p>
                  <span className="bold">Fale com: </span>
                  {pet.user.name}
                </p>
              </div>
              <div className={styles.actions}>
                {pet.available ? (
                  <>
                    <p>Adoção em processo</p>
                  </>
                ) : (
                  <p>Parabéns por concluir a adoção</p>
                )}{" "}
              </div>
            </div>
          ))}

        {pets.length === 0 && <p> Ainda não há adoções de Pets</p>}
      </div>
    </section>
  );
}

export default MyAdoptions;
