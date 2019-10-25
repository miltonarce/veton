import React from "react";
import PropTypes from "prop-types";

const Pet = ({
  name,
  last_name,
  image,
  birthday,
  weight
}) => (
    <div className="card-pet">
      <div className="card-pet__image">
        <img
          src={
            image
              ? `http://api.veton/imgs/${image}`
              : "https://via.placeholder.com/300x200"
          }
          alt={name}
        />
      </div>
      <div className="card-pet__name">
        <h3>{`${name} ${last_name}`}</h3>
      </div>
      <div className="card-pet__data">
        <div className="card-pet__data__birthday">
          {birthday || "Sin cumpleaños."}
        </div>
        <div className="card-pet__data__weight">{weight || "0"} Kg.</div>
      </div>
      <div className="card-pet__info-chips">
        <div className="card-pet__info-chips__vacuna">VACUNAS</div>
        <div className="card-pet__info-chips__consulta">CONSULTAS</div>
      </div>
      <div className="card-pet__alert">Tiene una consulta próxima.</div>
    </div>
  );

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string
};

export default Pet;
