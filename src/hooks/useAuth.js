import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import useFlashMessages from "./UseFlashMessage";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { setFlashMessages } = useFlashMessages();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authotization = `Bearer ${JSON.parse.token}`;
      setAuthenticated(true);
    }
  });
  async function register(user) {
    let msgText = "Cadastro realizado com sucesso";
    let msgType = "sucess";
    try {
      const data = await api.post("/user/register", user).then((resposta) => {
        return resposta.data;
      });
      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
    setFlashMessages(msgText, msgType);
  }

  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));

    navigate("/");
  }

  function logout() {
    const msgText = "Logout realizado com sucesso";
    const msgType = "sucess";
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authotization = undefined;

    navigate("/");
    setFlashMessages(msgText, msgType);
  }
  return { authenticated, register, logout };
}
