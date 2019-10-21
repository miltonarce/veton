import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  }
}));

const Consultation = ({ dataConsultation, user }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id_consultation: dataConsultation.id_consultation,
    created_at: dataConsultation.created_at,
    updated_at: dataConsultation.updated_at,
    afflictions_procedures: dataConsultation.afflictions_procedures,
    comments: dataConsultation.comments,
    hasError: null,
    hasDisabled: true,
  });

  React.useEffect(() => {
    if (user.id_role == 3) {
      setValues({ hasDisabled: false });
    }
  }, []);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleOnSubmit = async event => {

    console.log("algo");
  }

  return (
    <form className={classes.container} onSubmit={handleOnSubmit} noValidate autoComplete="off">
      <TextField
        disabled
        id="outlined-id_consultation"
        label="#ID CONSULTA"
        className={classes.textField}
        value={values.id_consultation}
        onChange={handleChange('id_consultation')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-created_at"
        label="FECHA DE INICIO DE CONSULTA"
        className={classes.textField}
        value={values.created_at}
        onChange={handleChange('created_at')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled
        id="outlined-updated_at"
        label="FECHA DE ÚLTIMA ACTUALIZACIÓN"
        className={classes.textField}
        value={values.updated_at}
        onChange={handleChange('updated_at')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled={values.hasDisabled}
        id="outlined-afflictions_procedures"
        label="AFLICCIONES"
        multiline
        rows="6"
        col="20"
        value={values.afflictions_procedures}
        onChange={handleChange('afflictions_procedures')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        disabled={values.hasDisabled}
        id="outlined-comments"
        label="OBSERVACIONES"
        multiline
        rows="6"
        col="20"
        value={values.comments}
        onChange={handleChange('comments')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      {
        !values.hasDisabled ?
          (
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Guardar consulta
      </Button>
          ) : ''
      }

    </form>
  )
};

export default Consultation;