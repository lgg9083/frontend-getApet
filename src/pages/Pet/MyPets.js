import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import RoundImage from "../../components/layouts/RoundedImage";
import useFlashMessages from "../../hooks/UseFlashMessage";
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
        console.log(token

        )
        setPets(response.data.pets);
      });
  }, [token]);
  return (
    <section>
      <div>
        <h1>MyPets</h1>
        <Link to="/pets/add">Cadastrar Pet</Link>
      </div>
      <div>
        { pets.length > 0 && <p>Meus Pets cadastrados</p>}
        {pets.length === 0 && <p> Não há Pets cadastrados</p>}
      </div>
    </section>
  );
}

export default MyPets;
