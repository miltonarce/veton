import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { ConsultationForm } from "../../../Components/Consultations";
import { ApiVet } from "../../../Services";
import TitlePages from "../../../Components/Shared/TitlePages";
import { AppContext } from "../../../Store";

const AddConsultation = props => {
  const [values, setValues] = useState({
    isLoading: false,
  });
  /**
   * Hook para context
   */
  const {
    auth: { user },
  } = useContext(AppContext);

  /**
   * Hook para notificaciones
   */
  const { enqueueSnackbar } = useSnackbar();
  /**
   * Method to handle submit from form, create new consultation
   * @param {object} request
   * @returns {void}
   */
  const handleOnSubmit = async request => {
    console.log(props);

    try {
      setValues({ isLoading: true });
      const { data } = await ApiVet.consultations.create(
        props.match.params.idHistory,
        request
      );
      if (data.success) {
        enqueueSnackbar(data.msg, { variant: "success" });
        setValues({ isLoading: true });
        setTimeout(() => {
          props.history.goBack();
        }, 3000);
      } else {
        alert("no entramos");
        enqueueSnackbar(data.msg, { variant: "error" });
        setValues({ isLoading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <TitlePages
          subtitle=" Aquí podrás agregar una nueva consulta a la mascota."
          title="Agregar nueva consulta"
        />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item xs={7}>
            {values.isLoading ? (
              <Container fixed>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                  <CircularProgress color="secondary" />
                </Grid>
              </Container>
            ) : (
                <ConsultationForm
                  title="Registrar Consulta"
                  user={user}
                  onSubmit={handleOnSubmit}
                />
              )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddConsultation;
