import { useEffect, useState } from "react";

import style from "./Message.module.css";

import bus from "../../utils/bus";
function Message() {
  const [type, setType] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setType(type);
      setMessage(message);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);
  return (
    visibility && (
      <div className={`${style.message} ${style[type]}`}>
        <p>{message}</p>
      </div>
    )
  );
}

export default Message;
