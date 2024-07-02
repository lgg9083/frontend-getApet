import api from "../../utils/api";
import { useState, useEffect } from "react";

import styles from "./Dashboard.module.css";
import RoundedImage from "../../components/layouts/RoundedImage";
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
      });
  }, [token]);
}

export default MyAdoptions;
