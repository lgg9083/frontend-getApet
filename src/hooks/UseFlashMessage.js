import bus from "../utils/bus";

export default function useFlashMessages() {
  function setFlashMessages(msg, type) {
    bus.emit("flash", {
      message: msg,
      type: type,
    });
  }
  return { setFlashMessages };
}
