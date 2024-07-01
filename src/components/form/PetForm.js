import { useState } from "react";
import formstyles from "./Form.module.css";

import Input from "./Input";
import Select from "./Select";

function PetForm({ handleSubmit, petData, btnText }) {
  const [pet, setPet] = useState(petData || "");
  const [preview, setPreview] = useState([]);
  const colors = ["Branco", "Preto", "Caramelo", "Cinza", "Mesclado"];
  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }
  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }
  function handleColor(e) {
    setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text });
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(pet);
  }
  return (
    <form onSubmit={submit} className={formstyles.form_container}>
      <div className={formstyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name} + ${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img src={""} alt={pet.name} key={`${pet.name} + ${index}`} />
            ))}
      </div>
      <Input
        text="Imagens do pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do pet"
        type="text"
        name="name"
        placeholder="Digite o nome do pet"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />
      <Input
        text="Idade do pet"
        type="text"
        name="age"
        placeholder="Digite a idade do pet"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />
      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso do pet"
        handleOnChange={handleChange}
        value={pet.weight || ""}
      />
      <Select
        text="Selecione uma cor"
        name="color"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ""}
      />
      <Input type="submit" value={btnText} />
    </form>
  );
}

export default PetForm;
