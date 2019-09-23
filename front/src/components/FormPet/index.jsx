import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class FormPet extends React.PureComponent {
  constructor(props) {
    super(props);
    const [firstType] = props.types;
    this.state = {
      form: {
        name: '',
        lastname: '',
        birdthay: '',
        image: '',
        weight: '',
        color: '',
        comments: '',
        type: firstType.id,
        race: '',
        gender: '',
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
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    const { types, races, title } = this.props;
    const { name, lastname, birdthay, image, weight, color, comments, type, race, gender } = this.state.form;
    const racesForType = races[type];
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
              id="lastname"
              name="lastname"
              value={lastname}
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
              id="color"
              name="color"
              value={color}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea name="comments" className="form-control" value={comments} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo</label>
            <select className="form-control" id="type" name="type" value={type} onChange={this.handleChange}>
              {types.map((type, index) => (
                <option value={type.id} key={index}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="race">Raza</label>
            <select className="form-control" id="race" name="race" value={race} onChange={this.handleChange}>
              {racesForType.map((race, index) => (
                <option value={race.id} key={index}>
                  {race.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="exampleRadios1"
                value="male"
                checked={gender === 'male'}
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
                name="gender"
                id="gender"
                value="female"
                checked={gender === 'female'}
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

FormPet.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ),
  races: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
