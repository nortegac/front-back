import ReactDOM from "react-dom";
import { useState } from "react";
const axios = require("axios");

const useCreateForm = (schema) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const validate = () => {
    return schema.validate(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate();
    if (!error) {
      axios.post("/offers", inputs).then((res) => {
        console.log(res);
      });
      ReactDOM.render(
        "Oferta creada. Actualizar página o revisar BD para ver.",
        document.getElementById("msg")
      );
      console.log("Form submitted");
    } else {
      console.log(error);
      setErrors(error);
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return { handleSubmit, handleInputChange, errors };
};

export default useCreateForm;
