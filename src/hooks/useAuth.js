import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/api";

export default function useAuth() {
  async function register(user) {
    try {
      const data = await api.post("/user/register", user).then((resposta) => {
        return resposta.data;
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return { register };
}
