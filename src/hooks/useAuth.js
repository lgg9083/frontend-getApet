import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/api";
import useFlashMessages from "./UseFlashMessage";
export default function useAuth() {
  const { setFlashMessages } = useFlashMessages();
  let msgText = "Cadastro realizado com sucesso";
  let msgType = "sucess";
  async function register(user) {
    try {
      const data = await api.post("/user/register", user).then((resposta) => {
        return resposta.data;
      });
      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
    setFlashMessages(msgText, msgType);
  }
  return { register };
}
