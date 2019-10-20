import React from "react";
import PropTypes from "prop-types";

class FormAddPet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id_user: 2,
        id_type: 1,
        id_breed: 1,
        name: "",
        last_name: "",
        birdthay: null,
        image: "",
        weight: null,
        colors: null,
        comments: "",
        id_gender: 1
      }
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   * Method to handle submit with all data from form
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.form);
  }

  /**
   * Method to handle onChange for all inputs with name and value
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange(event) {
    const { name, value } = event.target;
    if (name === "id_type" || name === "id_breed" || name === "id_gender") {
      this.setState({ form: { ...this.state.form, [name]: Number(value) } });
    } else {
      this.setState({ form: { ...this.state.form, [name]: value } });
    }
  }

  render() {
    const { types, breeds, title } = this.props;
    const {
      name,
      last_name,
      birdthay,
      image,
      weight,
      colors,
      comments,
      id_type,
      id_breed
    } = this.state.form;
    const breedsByType = breeds.filter(breed => breed.id_type === id_type);
    const { handleOnChange, handleOnSubmit } = this;

    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form className="form_pet" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={last_name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="birdthay">Cumpleaños</label>
            <input
              type="date"
              className="form-control"
              id="birdthay"
              name="birdthay"
              value={birdthay}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Imagen</span>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="imagePet"
                name="image"
                value={image}
                onChange={handleOnChange}
              />
              <label className="custom-file-label" htmlFor="imagePet">
                {image ? image : "No se cargó ninguna imagen"}
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Peso</label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              value={weight}
              onChange={handleOnChange}
            />
            <span className="text-secondary">Medidas en Kg</span>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="colors"
              name="colors"
              value={colors}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea
              name="comments"
              className="form-control"
              value={comments}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select
              className="form-control"
              id="id_type"
              name="id_type"
              value={id_type}
              onChange={handleOnChange}
            >
              {types.map(type => (
                <option value={type.id_type} key={type.id_type}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="breeds">Raza</label>
            <select
              className="form-control"
              id="id_breed"
              name="id_breed"
              value={id_breed}
              onChange={handleOnChange}
            >
              {breedsByType.map(breed => (
                <option value={breed.id_breed} key={breed.id_breed}>
                  {breed.breed}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="id_gender"
                id="gender_male"
                value={2}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="gender_male">
                Macho
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="id_gender"
                id="gender_female"
                value={1}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="gender_female">
                Hembra
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Aceptar
          </button>
        </form>
      </div>
    );
  }
}

FormAddPet.propTypes = {
  breeds: PropTypes.arrayOf(
    PropTypes.shape({
      id_breed: PropTypes.number.isRequired,
      breed: PropTypes.string.isRequired
    }).isRequired
  ),
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id_type: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ),
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default FormAddPet;
