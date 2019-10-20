import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

class RolSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type_rol: props.initialValue
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  /**
   * Method to handle on change select with current rol, call function to send value
   * @param {Event} event
   * @returns void
   */
  handleOnChange(event) {
    const type_rol = Number(event.target.value);
    this.setState({ ...this.state, type_rol });
    this.props.onRolSelected(type_rol);
  }

  render() {
    const { type_rol } = this.state;
    const { handleOnChange } = this;
    return (
      <form className="form-rol" noValidate>
        <div className="form-group">
          <label htmlFor="type_rol">¿Qué tipo de usuario eres?</label>
          <select
            className="form-control"
            id="type_rol"
            onChange={handleOnChange}
            value={type_rol}
          >
            <option value={4}>Usuario</option>
            <option value={2}>Veterinaria</option>
          </select>
        </div>
      </form>
    );
  }
}

RolSelect.propTypes = {
  onRolSelected: PropTypes.func.isRequired,
  initialValue: PropTypes.number
};

export default RolSelect;
