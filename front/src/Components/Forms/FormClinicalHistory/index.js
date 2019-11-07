import React from "react";
import PropTypes from "prop-types";
import {Paper, Typography, Grid, TextField, Button} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  Paper: {
    padding: "2rem",
    borderRadius: "23px",
  },
  TitleForm: {
    fontWeight: 500,
    marginBottom: "1rem",
    textAlign: "center",
  },
  GridButton: {
    width: "100%",
  },
};

class FormClinicalHistory extends React.Component {
  state = {
    form: {
      comments: "",
      hide_comments: "",
      afflictions_procedures: "",
    },
  };

  handleOnSubmit = event => {
    const {props, state} = this;
    event.preventDefault();
    props.onSubmit(state.form);
  };

  handleOnChange = event => {
    const {state} = this;
    const {name, value} = event.target;
    this.setState({form: {...state.form, [name]: value}});
  };

  render() {
    const {title, classes} = this.props;
    const {comments, hide_comments, afflictions_procedures} = this.state.form;
    const {handleOnSubmit, handleOnChange} = this;
    return (
      <>
        <Paper className={classes.Paper}>
          <Typography
            className={classes.TitleForm}
            color="secondary"
            component="h3"
          >
            {title}
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <Grid
              container
              alignItems="center"
              direction="column"
              justify="center"
              spacing={3}
            >
              <Grid item xs={12}>
                <TextField
                  required
                  id="comments"
                  label="Comentarios"
                  margin="normal"
                  name="comments"
                  type="text"
                  value={comments}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="hide_comments"
                  label="Comentarios ocultos"
                  margin="normal"
                  name="hide_comments"
                  type="text"
                  value={hide_comments}
                  onChange={handleOnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="afflictions_procedures"
                  label="Aflicciones"
                  margin="normal"
                  name="afflictions_procedures"
                  type="text"
                  value={afflictions_procedures}
                  onChange={handleOnChange}
                />
              </Grid>
            </Grid>
            <Grid item className={classes.GridButton} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="flex-end"
              >
                <Grid item xs={3}>
                  <Button color="primary" type="submit" variant="contained">
                    AGREGAR
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </>
    );
  }
}

FormClinicalHistory.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(FormClinicalHistory);
