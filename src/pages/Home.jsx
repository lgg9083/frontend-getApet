import api from "../utils/api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Home.module.css";
function Home() {
  const [pet, setPets] = useState({});
  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);
  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada e conheça o tutor deles</p>
      </div>
      <div className={styles.pet_container}>
        {pet.length > 0 &&
          pet.map((pet) => (
            <div className={styles.pet_card}>
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
                className={styles.pet_card_image}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso : </span>
                {pet.weight}kg
              </p>
              {pet.available ? (
                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.adopted_text}>Adotado</p>
              )}
            </div>
          ))}
        {pet.length === 0 && <p> Não há pets disponiveis para adoção</p>}
      </div>
    </section>
  );
}

export default Home;
