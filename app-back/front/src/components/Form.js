import useCreateForm from "./customHooks";
import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  salary: Joi.number().required(),
  city: Joi.string().min(2).required(),
});

const Form = () => {
  const { handleSubmit, handleInputChange } = useCreateForm(schema);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre de la oferta</label>
          <input
            type="name"
            id="name"
            name="name"
            autoComplete="name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="company">Compañía</label>
          <input
            type="company"
            id="company"
            name="company"
            autoComplete="company"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="salary">Salario</label>
          <input
            type="salary"
            id="salary"
            name="salary"
            autoComplete="salary"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="city">Ciudad</label>
          <input
            type="city"
            id="city"
            name="city"
            autoComplete="city"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Publicar oferta</button>
      </form>
    </div>
  );
};

export default Form;
