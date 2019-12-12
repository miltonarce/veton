import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, TextField, Button, FormHelperText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { InvalidField } from "../../Notifications";
import styles from "./styles";

class HistoryForm extends React.Component {
  state = {
    form: {
      comments: "",
      hide_comments: "",
      afflictions_procedures: "",
    },
  };

  handleOnSubmit = event => {
    const { props, state } = this;
    event.preventDefault();
    props.onSubmit(state.form);
  };

  handleOnChange = event => {
    const { state } = this;
    const { name, value } = event.target;
    this.setState({ form: { ...state.form, [name]: value } });
  };

  render() {
    const { title, classes, errors } = this.props;
    const { comments, hide_comments, afflictions_procedures } = this.state.form;
    const { handleOnSubmit, handleOnChange } = this;
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                required
                id="comments"
                label="Comentarios"
                margin="normal"
                name="comments"
                type="text"
                value={comments}
                onChange={handleOnChange}
              />
              <InvalidField errors={errors} field="comments" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                required
                id="hide_comments"
                label="Comentarios ocultos"
                margin="normal"
                name="hide_comments"
                type="text"
                value={hide_comments}
                onChange={handleOnChange}
              />
              <FormHelperText>Permite aportar al veterinario medidas de seguridad sobre el animal, si es agresivo, muerde constantemente, entre otros</FormHelperText>
              <InvalidField errors={errors} field="hide_comments" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="afflictions_procedures"
                label="Aflicciones"
                margin="normal"
                name="afflictions_procedures"
                type="text"
                value={afflictions_procedures}
                onChange={handleOnChange}
              />
              <InvalidField errors={errors} field="afflictions_procedures" />
            </Grid>
            <Grid item className={classes.GridButton} xs={12}>
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <Grid item xs={3}>
                  <span>(*) Datos obligatorios.</span>
                </Grid>
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

HistoryForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(HistoryForm);
