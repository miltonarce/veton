import React from "react";
import PropTypes from "prop-types";
import Veterinary from "../Veterinary";

const ListVeterinarians = ({ veterinarians }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Empleado desde</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {veterinarians.map((veterinary, i) => (
            <Veterinary key={i} {...veterinary} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ListVeterinarians.propTypes = {
  veterinarians: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ListVeterinarians;
