import React from "react";
import PropTypes from "prop-types";
import {InputLabel, MenuItem, Select, FormControl} from "@material-ui/core";

class RolSelect extends React.Component {
  state = {
    type_rol: this.props.initialValue,
  };

  componentDidMount() {
    const {onSetNext} = this.props;
    onSetNext(true);
  }

  handleOnChange = event => {
    const {state, props} = this;
    const type_rol = Number(event.target.value);

    this.setState({...state, type_rol});
    props.onRolSelected(type_rol);
  };

  render() {
    const {type_rol} = this.state;
    const {handleOnChange} = this;
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor="age-simple">Tipo de usuario</InputLabel>
        <Select
          inputProps={{
            name: "tipo",
            id: "user-type",
          }}
          value={type_rol}
          onChange={handleOnChange}
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
  initialValue: PropTypes.number,
};

export default RolSelect;
