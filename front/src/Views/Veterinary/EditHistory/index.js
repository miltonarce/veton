import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Grid,
  CssBaseline,
  CircularProgress,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { EditHistoryForm } from "../../../Components/Histories";
import { ApiVet } from "../../../Services";
import TitlePages from "../../../Components/Shared/TitlePages";
import { AppContext } from "../../../Store";

const EditHistory = props => {
  const [values, setValues] = useState({
    isLoading: true,
    dataHistory: null,
  });
  const getHistory = async () => {
    const { match } = props;
    try {
      const { data } = await ApiVet.clinicalhistory.fetch(match.params.idHistory);
      setValues({ ...values, dataHistory: data, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Hook para componentDidMount
   */
  useEffect(() => {
    getHistory();
    // eslint-disable-next-line
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
      const { data } = await ApiVet.clinicalhistories.edit(
        values.dataHistory.id_history,
        {
          ...dataEdited,
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
          subtitle=" Aquí podrás editar una historia clínica creada."
          title="Editar Historia"
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
                <EditHistoryForm
                  data={values.dataHistory}
                  title="Editar Historia"
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

export default EditHistory;
