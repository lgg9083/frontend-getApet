function Form({type, text, name, placeholder, handleOnChange, value, multiple}){
    return (
        <div>
            <label htmlFor=""></label>
            <input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}