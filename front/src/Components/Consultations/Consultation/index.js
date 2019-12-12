import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import ModalConsultation from "../ModalConsultation";
import useStyles from "./styles";

const Consultation = ({ dataConsultation, user }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id_consultation: dataConsultation.id_consultation,
    id_user: user.id_user,
    id_history: dataConsultation.id_history,
    created_at: dataConsultation.created_at,
    updated_at: dataConsultation.updated_at,
    afflictions_procedures: dataConsultation.afflictions_procedures,
    comments: dataConsultation.comments,
    hasError: null,
    hasDisabled: user.id_role !== 3,
    openModal: false,
  });

  React.useEffect(() => {
    if (user.id_role === 3) {
      setValues({
        hasDisabled: false,
        afflictions_procedures: dataConsultation.afflictions_procedures,
        comments: dataConsultation.comments,
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleOpenModal = () => {
    setValues({ ...values, openModal: !values.openModal });
  };

  return (
    <>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={user.id_role === 3 ? 10 : 12}>
          <div className={classes.consultList} onClick={handleOpenModal}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item className={classes.centerElements} xs={4}>
                <span>
                  #{dataConsultation.id_consultation}--
                  {dataConsultation.created_at}
                </span>
              </Grid>
              <Grid item className={classes.centerElements} xs={4}>
                <Check />
              </Grid>
              <Grid item className={classes.centerElements} xs={4}>
                <Check />
              </Grid>
            </Grid>
          </div>
        </Grid>
        {user.id_role === 3 ? (
          <Grid item xs={2}>
            <Link
              className={classes.ContentLink}
              to={`/veterinary/edit-consultation/${dataConsultation.id_consultation}`}
            >
              <Button
                className={classes.button}
                color="primary"
                size="small"
                type="submit"
                variant="contained"
              >
                Editar
              </Button>
            </Link>
          </Grid>
        ) : (
            ""
          )}
      </Grid>
      <ModalConsultation
        close={handleOpenModal}
        data={dataConsultation}
        open={values.openModal}
      />
    </>
  );
};

Consultation.propTypes = {
  dataConsultation: PropTypes.shape({}),
  user: PropTypes.shape({})
};

export default Consultation;
