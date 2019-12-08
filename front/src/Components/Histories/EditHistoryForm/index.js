import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class EditHistoryForm extends React.Component {
  state = {
    form: {
      comments: "",
      id_user: null,
      afflictions_procedures: "",
    },
  };

  componentDidMount() {
    const { props } = this;
    this.setState({
      form: {
        id_user: props.user.id_user,
        comments: props.data.comments,
        afflictions_procedures: props.data.afflictions_procedures,
      },
    });
  }

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
    const { title, classes, data } = this.props;
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
            {title} # {data.id_history}
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
                    GUARDAR
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

EditHistoryForm.propTypes = {
  data: PropTypes.shape({}),
  user: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(EditHistoryForm);
