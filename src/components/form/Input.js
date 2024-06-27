import style from "./Input.module.css";

function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) {
  return (
    <div>
      <label htmlFor={name}>{text}{type == 'submit' ? '' : ':'}</label>
      <input 
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : "")}
      />
    </div>
  );
}

export default Input