import React from 'react';
import PropTypes from 'prop-types';

export default class FormAddPet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id_user: 2,
        id_type: 1,
        name: '',
        last_name: '',
        birdthay: null,
        image: '',
        weight: null,
        colors: null,
        comments: '',
        id_breed: 1,
        id_gender: 1,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Method to handle submit with all data from form
   * @param {Event} event
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.form);
  }

  /**
   * Method to handle onChange for all inputs with name and value
   * @param {Event} event
   * @returns {void}
   */
  handleChange(event) {
    const { name, value } = event.target;
    if (name == "id_type" || name == "id_breed" || name == "id_gender") {
      this.setState({ form: { ...this.state.form, [name]: Number(value) } });
    } else {
      this.setState({ form: { ...this.state.form, [name]: value } });
    }
  }



  render() {
    const { types, breeds, title } = this.props;
    const { name, last_name, birdthay, image, weight, colors, comments, id_type, id_breed, id_gender } = this.state.form;
    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form className="form_pet" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
              <label className="custom-file-label" htmlFor="imagePet">
                {image ? image : 'No se cargó ninguna imagen'}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea name="comments" className="form-control" value={comments} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select className="form-control" id="id_type" name="id_type" value={id_type} onChange={this.handleChange}>
              {types.map((type, index) => (
                <option value={type.id_type} key={index}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="breeds">Raza</label>
            <select className="form-control" id="id_breed" name="id_breed" value={id_breed} onChange={this.handleChange}>
              {breeds.map((breed, index) => (
                <option value={breed.id_breed} key={index}>
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
                id="exampleRadios1"
                value={2}
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Macho
                </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="id_gender"
                id="gender"
                value={1}
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="gender">
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
      breed: PropTypes.string.isRequired,
    }).isRequired,
  ),
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

