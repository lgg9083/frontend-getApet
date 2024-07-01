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
      <h1>Home</h1>
    </section>
  );
}

export default Home;
