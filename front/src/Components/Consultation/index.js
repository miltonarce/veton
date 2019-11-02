import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ApiVet from "../../Services/ApiVet";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Consultation = ({dataConsultation, user}) => {
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

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const handleOnSubmit = async event => {
    event.preventDefault();
    try {
      const data = await ApiVet.consultations.edit(
        dataConsultation.id_consultation,
        {
          ...values,
          id_user: user.id_user,
          id_history: dataConsultation.id_history,
        }
      );
      if (data.data.success) {
        alert("La consulta se edito correctamente");
        console.log(data);
      } else {
        console.log(data);
        alert("Hubo un error al editar la consulta");
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
      <TextField
        disabled
        className={classes.textField}
        id="outlined-id_consultation"
        label="#ID CONSULTA"
        margin="normal"
        value={values.id_consultation}
        variant="outlined"
        onChange={handleChange("id_consultation")}
      />
      <TextField
        disabled
        className={classes.textField}
        id="outlined-created_at"
        label="FECHA DE INICIO DE CONSULTA"
        margin="normal"
        value={values.created_at}
        variant="outlined"
        onChange={handleChange("created_at")}
      />
      <TextField
        disabled
        className={classes.textField}
        id="outlined-updated_at"
        label="FECHA DE ÚLTIMA ACTUALIZACIÓN"
        margin="normal"
        value={values.updated_at}
        variant="outlined"
        onChange={handleChange("updated_at")}
      />
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
        variant="outlined"
        onChange={handleChange("afflictions_procedures")}
      />
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
        variant="outlined"
        onChange={handleChange("comments")}
      />
      {!values.hasDisabled ? (
        <Button
          className={classes.button}
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          type="submit"
          variant="contained"
        >
          Guardar consulta
        </Button>
      ) : (
        ""
      )}
    </form>
  );
};

export default Consultation;
