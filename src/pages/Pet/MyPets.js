import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MyPets() {
  const [pets, setPets] = useState([]);
  return (
    <section>
      <div>
        <h1>MyPets</h1>
        <Link>Cadastrar Pet</Link>
      </div>
      <div>
        {pets.length > 0 && <p>Meus Pets cadastrados</p>}
        {pets.length === 0 && <p> Não há Pets cadastrados</p>}
      </div>
    </section>
  );
}

export default MyPets;
