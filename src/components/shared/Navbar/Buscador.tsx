import "./Buscador.css";

const Buscador = () => {
  return (
    <div>
      <div className="form__group field">
        <input placeholder="Name" className="form__field" type="input" />
        <label className="form__label" htmlFor="name">
          Buscar por marca, producto o sku
        </label>
      </div>
    </div>
  );
};

export default Buscador;
