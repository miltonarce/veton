import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, TextField, Grid, Typography} from "@material-ui/core/";
import {EditOutlined} from "@material-ui/icons";

import {useSnackbar} from "notistack";
import ApiVet from "../../Services/ApiVet";

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
    marginTop: theme.spacing(3),
  },
  menu: {
    width: 200,
  },
  button: {
    marginRight: "4rem",
    height: "40px",
    width: "160px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    color: "#5C2299",
  },
  hisImg: {
    height: "160px",
    width: "160px",
    borderRadius: "23px",
    border: "1px solid #FE3A90",
  },
  rowImg: {
    marginTop: "1rem",
  },
  ContentCardText: {
    "& p": {
      wordBreak: "break-all",
      marginTop: 0,
    },
  },
}));

const History = ({dataHistory, user}) => {
  const {enqueueSnackbar} = useSnackbar();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id_History: dataHistory.id_history,
    created_at: dataHistory.created_at,
    updated_at: dataHistory.updated_at,
    afflictions_procedures: dataHistory.afflictions_procedures,
    comments: dataHistory.comments,
    hasDisabled: user.id_role !== 3,
  });

  React.useEffect(() => {
    if (user.id_role === 3) {
      setValues({hasDisabled: false});
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = name => event => {
    setValues({...values, [name]: event.target.value});
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const {data} = await ApiVet.clinicalhistories.edit(
        dataHistory.id_history,
        values
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
    <Grid container alignItems="center" direction="row" justify="space-between">
      <Grid item xs={8}>
        <Grid item className={classes.Paper} xs={12}>
          <Grid item className={classes.ContentCardText} xs={12}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="flex-start"
              >
                <Grid item xs={3}>
                  <Grid item xs={12}>
                    <Typography color="secondary" component="p">
                      #ID HISTORIA
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{dataHistory.id_history}</p>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid item xs={12}>
                    <Typography color="secondary" component="p">
                      INICIO HISTORIA CLÍNICA
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{dataHistory.created_at}</p>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid item xs={12}>
                    <Typography color="secondary" component="p">
                      ÚLTIMA ACTUALIZACIÓN
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{dataHistory.updated_at}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.dense} xs={12}>
              <Grid
                container
                alignItems="flex-start"
                direction="row"
                justify="flex-start"
              >
                <Grid item xs={5}>
                  <Grid item xs={12}>
                    <Typography color="secondary" component="p">
                      AFLICCIONES
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{dataHistory.afflictions_procedures}</p>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid item xs={12}>
                    <Typography color="secondary" component="p">
                      OBSERVACIONES
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{dataHistory.comments}</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <Grid container alignItems="center" direction="row" justify="center">
            <Typography color="secondary" component="p">
              IMAGENES GENERALES DE HISTORIA
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.rowImg} xs={12}>
          <Grid container alignItems="center" direction="row" justify="center">
            <img
              alt="no hay imagenes cargadas aun."
              className={classes.hisImg}
              src="/assets/no-image.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default History;
