import React from "react";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select, FormControl } from '@material-ui/core';

class RolSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type_rol: props.initialValue
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    this.props.onSetNext(true);
  }

  handleOnChange(event) {
    const type_rol = Number(event.target.value);
    this.setState({ ...this.state, type_rol });
    this.props.onRolSelected(type_rol);
  }

  render() {
    const { type_rol } = this.state;
    const { handleOnChange } = this;
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor="age-simple">Tipo de usuario</InputLabel>
        <Select
          value={type_rol}
          onChange={handleOnChange}
          inputProps={{
            name: 'tipo',
            id: 'user-type',
          }}
        >
          <MenuItem value={4}>Usuario</MenuItem>
          <MenuItem value={2}>Veterinaria</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

RolSelect.propTypes = {
  onRolSelected: PropTypes.func.isRequired,
  initialValue: PropTypes.number
};

export default RolSelect;
