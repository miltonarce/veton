import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import {Grid, Button} from "@material-ui/core/";
import {Check} from "@material-ui/icons";
import {useSnackbar} from "notistack";
import ApiVet from "../../Services/ApiVet";

// Default styles for components...
const useStyles = makeStyles(theme => ({
  consultList: {
    background: "#f3f3f3",
    borderRadius: "23px",
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "#5c2299",
    transition: ".5s",
    padding: "5px",
    "&:hover": {
      background: "#dbdbdb",
      cursor: "pointer",
    },
  },
  ContentLink: {
    textDecoration: "none",
  },
  centerElements: {
    textAlign: "center",
  },
  button: {
    marginLeft: "3rem",
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
    // eslint-disable-next-line
  }, []);

  /** *
   * Method to handle change status
   */
  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  return (
    <>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={10}>
          <div className={classes.consultList}>
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
      </Grid>
    </>
  );
};

export default Consultation;
