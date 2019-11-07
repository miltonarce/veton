import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, TextField, Grid} from "@material-ui/core/";
import {EditOutlined} from "@material-ui/icons";
import {useSnackbar} from "notistack";
import ApiVet from "../../Services/ApiVet";

//Default styles for components...
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    "& label": {
      color: "#FE3090 !important",
    },
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    marginRight: "4rem",
    height: "40px",
    width: "160px",
  },
}));

const Consultation = ({dataConsultation, user}) => {
  const {enqueueSnackbar} = useSnackbar();
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
  });

  React.useEffect(() => {
    if (user.id_role === 3) {
      setValues({
        hasDisabled: false,
        afflictions_procedures: dataConsultation.afflictions_procedures,
        comments: dataConsultation.comments,
      });
    }
  }, []);

  /***
   * Method to handle change status
   */
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const handleOnSubmit = async event => {
    event.preventDefault();
    try {
      const {data} = await ApiVet.consultations.edit(
        dataConsultation.id_consultation,
        {
          ...values,
          id_user: user.id_user,
          id_history: dataConsultation.id_history,
        }
      );
      if (data.success) {
        enqueueSnackbar(data.msg, {variant: "success"});
      } else {
        enqueueSnackbar(data.msg, {variant: "error"});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.container}
      onSubmit={handleOnSubmit}
    >
      <Grid container alignItems="center" direction="row" justify="flex-end">
        {!values.hasDisabled ? (
          <Button
            className={classes.button}
            color="primary"
            size="small"
            startIcon={<EditOutlined />}
            type="submit"
            variant="contained"
          >
            Editar consulta
          </Button>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        container
        alignItems="flex-start"
        direction="row"
        justify="flex-start"
        spacing={3}
      >
        <Grid item xs={6}>
          <Grid
            container
            alignItems="flex-start"
            direction="column"
            justify="flex-start"
          >
            <Grid item xs={12}>
              <TextField
                disabled
                className={classes.textField}
                id="outlined-id_consultation"
                label="#ID CONSULTA"
                margin="normal"
                value={values.id_consultation}
                onChange={handleChange("id_consultation")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled
                className={classes.textField}
                id="outlined-created_at"
                label="FECHA DE INICIO DE CONSULTA"
                margin="normal"
                value={values.created_at}
                onChange={handleChange("created_at")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled
                className={classes.textField}
                id="outlined-updated_at"
                label="FECHA DE ÚLTIMA ACTUALIZACIÓN"
                margin="normal"
                value={values.updated_at}
                onChange={handleChange("updated_at")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            alignItems="flex-start"
            direction="column"
            justify="flex-start"
          >
            <Grid item xs={12}>
              <TextField
                multiline
                className={classes.textField}
                col="20"
                disabled={values.hasDisabled}
                id="outlined-afflictions_procedures"
                label="AFLICCIONES"
                margin="normal"
                rows="6"
                value={values.afflictions_procedures}
                onChange={handleChange("afflictions_procedures")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                className={classes.textField}
                col="20"
                disabled={values.hasDisabled}
                id="outlined-comments"
                label="OBSERVACIONES"
                margin="normal"
                rows="6"
                value={values.comments}
                onChange={handleChange("comments")}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Consultation;
