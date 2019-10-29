import React from "react";
import PropTypes from "prop-types";
import { styled } from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import { Card, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";

const CardPet = styled(Card)({
  maxWidth: 345,
})

const CardPetMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

const Pet = ({
  name,
  last_name,
  image,
  birthday,
  weight,
}) => (
    <CardPet >
      <CardHeader
        title={`${name} ${last_name}`}
      />
      <CardPetMedia
        image={
          image
            ? `http://api.veton/imgs/${image}`
            : "https://via.placeholder.com/300x200"
        }
        title="Mascota Imagen"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Cumpleaños: {birthday || "Sin cumpleaños."}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Peso: {weight || "0"} Kg.
        </Typography>
      </CardContent>
    </CardPet >

    //   <div className="card-pet">
    //     <div className="card-pet__image">
    // //       <img
    //         src={
    //           image
    //             ? `http://api.veton/imgs/${image}`
    //             : "https://via.placeholder.com/300x200"
    //         }
    //         alt={name}
    //       />
    //     </div>
    //     <div className="card-pet__name">
    //       <h3>{`${name} ${last_name}`}</h3>
    //     </div>
    //     <div className="card-pet__data">
    //       <div className="card-pet__data__birthday">
    //         {birthday || "Sin cumpleaños."}
    //       </div>
    //       <div className="card-pet__data__weight">{weight || "0"} Kg.</div>
    //     </div>
    //     <div className="card-pet__info-chips">
    //       <div className="card-pet__info-chips__vacuna">VACUNAS</div>
    //       <div className="card-pet__info-chips__consulta">CONSULTAS</div>
    //     </div>
    //     <div className="card-pet__alert">Tiene una consulta próxima.</div>
    //   </div>
  );

Pet.propTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  image: PropTypes.string,
  birthday: PropTypes.string,
};

export default Pet;
