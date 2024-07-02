import styles from "./PetDetails.module.css";
import api from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFlashMessages from "../../hooks/UseFlashMessage";
import { all } from "axios";
function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessages } = useFlashMessages();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);
  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.pet_details_header}>
            <h1>Conhecendo o Pet: {pet.name}</h1>
            <p> Se tiver interesse, marque uma visita para conhecê-lo</p>
          </div>

          <div className={styles.pet_images}>
            {pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                all={pet.name}
                key={index}
              />
            ))}
          </div>
          <p>
            <span className="bold">Idade:</span> {pet.age} anos
          </p>
          <p>
            <span className="bold">Peso:</span> {pet.weight}kg
          </p>
          {token ? (
            <button> Solicitar uma visita</button>
          ) : (
            <p>
              Você precisa <Link to="/register">criar uma conta</Link> para
              solicitar uma visita
            </p>
          )}
        </section>
      )}
    </>
  );
}

export default PetDetails;
