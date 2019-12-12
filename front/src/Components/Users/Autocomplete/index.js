import React from "react";
import { CircularProgress, TextField, Container, Grid } from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import ListItemUsers from "../ListItemUser";
import { ApiVet}  from "../../../Services";
import styles from "./styles";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showListUsers: false,
      loading: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleUserSelected = this.handleUserSelected.bind(this);
  }

  /**
   * Method to handle when change value to fetch new users by input
   * @param {Event} event
   * @returns {void}
   */
  async handleOnChange(event) {
    const { value } = event.target;
    if (value.length >= 1) {
      try {
        this.setState({ ...this.state, loading: true });
        const { data } = await ApiVet.users.autocomplete(value);
        this.setState({ ...this.state, users: data, loading: false });
      } catch (err) {
        this.setState({ ...this.state, users: [], loading: false });
      }
    } else {
      this.setState({ ...this.state, users: [] });
    }
  }

  /**
   * Method to handle when user click any item in list, call callback to parent...
   * @param {object} user
   * @returns {void}
   */
  handleUserSelected(user) {
    this.props.onUserSelected(user);
    this.setState({ ...this.state, users: [] });
  }

  render() {
    const {
      state: { users, loading },
      handleOnChange,
      handleFocus,
      handleUserSelected,
      props: { placeholder },
    } = this;
    const { classes } = this.props;
    return (
      <>
        <TextField
          fullWidth
          required
          className={classes.Search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          placeholder={placeholder}
          onBlur={handleFocus}
          onChange={handleOnChange}
          onFocus={handleFocus}
        />
        {loading && (
          <Container fixed>
            <Grid
              container
              alignItems="center"
              className={classes.spinner}
              direction="row"
              justify="center"
            >
              <CircularProgress color="secondary" />
            </Grid>
          </Container>
        )}
        <ListItemUsers users={users} onUserSelected={handleUserSelected} />
      </>
    );
  }
}

export default withStyles(styles)(Autocomplete);
