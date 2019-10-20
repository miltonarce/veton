import React from "react";
import PropTypes from "prop-types";

const Veterinary = ({ name, last_name, created_at, email, onClickEdit }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{created_at}</td>
      <td>
        <button type="button" className="btn btn-link" onClick={onClickEdit}>
          Modificar
        </button>
      </td>
    </tr>
  );
};

Veterinary.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  created_at: PropTypes.string,
  email: PropTypes.string,
  onClickEdit: PropTypes.func
};

export default Veterinary;
