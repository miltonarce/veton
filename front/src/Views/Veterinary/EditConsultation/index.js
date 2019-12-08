import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { EditConsultationForm } from "../../../Components/Consultations";
import { ApiVet } from "../../../Services";
import TitlePages from "../../../Components/Shared/TitlePages";
import { AppContext } from "../../../Store";

const EditConsultation = props => {
  const [values, setValues] = useState({
    isLoading: true,
    dataConsultation: null,
  });
  const getConsultation = async () => {
    const { match } = props;
    try {
      const { data } = await ApiVet.consultation.fetch(
        match.params.idConsultation
      );
      setValues({ ...values, dataConsultation: data, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Hook para componentDidMount
   */
  useEffect(() => {
    getConsultation();
  }, []);

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
   * Method to handle submit from form, edit  consultation
   * @param {object} request
   * @returns {void}
   */
  const handleOnSubmit = async dataEdited => {
    try {
      const { data } = await ApiVet.consultations.edit(
        values.dataConsultation.id_consultation,
        {
          ...dataEdited,
          id_history: values.dataConsultation.id_history,
        }
      );
      if (data.success) {
        enqueueSnackbar(data.msg, { variant: "success" });
      } else {
        enqueueSnackbar(data.msg, { variant: "error" });
      }
      setTimeout(() => {
        props.history.goBack();
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <TitlePages
          subtitle=" Aquí podrás editar una consulta creada."
          title="Editar consulta"
        />
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item xs={7}>
            {values.isLoading ? (
              <CircularProgress color="secondary" />
            ) : (
                <EditConsultationForm
                  data={values.dataConsultation}
                  title="Editar Consulta"
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

export default EditConsultation;
