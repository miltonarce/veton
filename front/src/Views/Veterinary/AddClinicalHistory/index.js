import React, {useState} from "react";
import {
  Container,
  Grid,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import {useSnackbar} from "notistack";
import FormClinicalHistory from "../../../Components/Forms/FormClinicalHistory";
import Api from "../../../Services/Api";
import TitlePages from "../../../Components/TitlePages";

const AddClinicalHistory = props => {
  const [values, setValues] = useState({
    isLoading: false,
  });
  /**
   * Hook para notificaciones
   */
  const {enqueueSnackbar} = useSnackbar();
  /**
   * Method to handle submit from form create new clinical history
   * @param {object} request
   * @returns {void}
   */

  const handleOnSubmit = async request => {
    try {
      setValues({isLoading: true});
      const {data} = await Api.clinicalhistories.create(
        props.match.params.idPet,
        request
      );
      if (data.success) {
        enqueueSnackbar(data.msg, {variant: "success"});
        setValues({isLoading: true});
        setTimeout(() => {
          props.history.push(`/veterinary/pet/${props.match.params.idPet}`);
        }, 3000);
      } else {
        enqueueSnackbar(data.msg, {variant: "error"});
        setValues({isLoading: false});
      }
    } catch (err) {
      console.log(err);
      setValues({isLoading: false});
    }
  };
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <TitlePages
          subtitle=" Aquí podrás agregar una nueva y única historia clínica."
          title="Agregar nueva historia clínica"
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
              <FormClinicalHistory
                title="Registrar Historia Clínica"
                onSubmit={handleOnSubmit}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddClinicalHistory;
