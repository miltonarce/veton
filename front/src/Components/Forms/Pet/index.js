import React from "react";
import PropTypes from "prop-types";

class FormAddPet extends React.Component {
  state = {
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
      id_gender: 1,
    },
  };

  handleOnSubmit = event => {
    const {state, props} = this;
    event.preventDefault();
    props.onSubmit(state.form);
  };

  handleOnChange = event => {
    const {state} = this;
    const {name, value} = event.target;
    if (name === "id_type" || name === "id_breed" || name === "id_gender") {
      this.setState({form: {...state.form, [name]: Number(value)}});
    } else {
      this.setState({form: {...state.form, [name]: value}});
    }
  };

  render() {
    const {types, breeds, title} = this.props;
    const {
      form: {
        name,
        birdthay,
        image,
        weight,
        colors,
        comments,
        id_type,
        id_breed,
      },
    } = this.state;
    const breedsByType = breeds.filter(breed => breed.id_type === id_type);
    const {handleOnChange, handleOnSubmit} = this;

    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form className="form_pet" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              required
              className="form-control"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellido</label>
            <input
              required
              className="form-control"
              id="last_name"
              name="last_name"
              type="text"
              value={last_name}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birdthay">Cumpleaños</label>
            <input
              className="form-control"
              id="birdthay"
              name="birdthay"
              type="date"
              value={birdthay}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Imagen</span>
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="imagePet"
                name="image"
                type="file"
                value={image}
                onChange={handleOnChange}
              />
              <label className="custom-file-label" htmlFor="imagePet">
                {image || "No se cargó ninguna imagen"}
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Peso</label>
            <input
              className="form-control"
              id="weight"
              name="weight"
              type="number"
              value={weight}
              onChange={handleOnChange}
            />
            <span className="text-secondary">Medidas en Kg</span>
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              className="form-control"
              id="colors"
              name="colors"
              type="text"
              value={colors}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea
              className="form-control"
              name="comments"
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
                <option key={type.id_type} value={type.id_type}>
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
                <option key={breed.id_breed} value={breed.id_breed}>
                  {breed.breed}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                id="gender_male"
                name="id_gender"
                type="radio"
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
                id="gender_female"
                name="id_gender"
                type="radio"
                value={1}
                onChange={handleOnChange}
              />
              <label className="form-check-label" htmlFor="gender_female">
                Hembra
              </label>
            </div>
          </div>
          <button className="btn btn-primary btn-block" type="submit">
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
      breed: PropTypes.string.isRequired,
    }).isRequired
  ),
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id_type: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ),
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default FormAddPet;
