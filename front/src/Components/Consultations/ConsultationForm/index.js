import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { InvalidField } from "../../Notifications";
import styles from "./styles";

class ConsultationForm extends React.Component {
  state = {
    form: {
      comments: "",
      id_user: null,
      afflictions_procedures: "",
    },
  };

  componentDidMount() {
    const { props } = this;
    const { form } = this.state;
    this.setState({
      form: { ...form, id_user: props.user.id_user },
    });
  }

  /**
   * Handle submit event, call callback parent
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit = event => {
    const { props, state } = this;
    event.preventDefault();
    props.onSubmit(state.form);
  };

  /**
   * Method to check handle on change in form inputs
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange = event => {
    const { state } = this;
    const { name, value } = event.target;
    this.setState({ form: { ...state.form, [name]: value } });
  };

  render() {
    const { title, classes, errors } = this.props;
    const {
      form: { comments, afflictions_procedures },
    } = this.state;
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
                <Grid item xs={5}>
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

ConsultationForm.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({}),
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConsultationForm);
