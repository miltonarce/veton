import React from "react";
import {CircularProgress, TextField} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import {styled, withStyles} from "@material-ui/core/styles";
import ListItemUsers from "./users";
import ApiVet from "../../Services/ApiVet";

const CircularProgressAbsolute = styled(CircularProgress)({
  position: "absolute",
  right: "280px",
  height: "20px !important",
  width: "20px !important",
  bottom: "20px",
});

const styles = {
  Search: {
    border: "1px solid #5C2299",
    borderRadius: "23px",
    padding: "3px",
    paddingLeft: "10px",
    marginLeft: "3rem",
  },
};

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
    const {value} = event.target;
    if (value.length >= 1) {
      try {
        this.setState({...this.state, loading: true});
        const {data} = await ApiVet.users.autocomplete(value);
        this.setState({...this.state, users: data, loading: false});
      } catch (err) {
        this.setState({...this.state, users: [], loading: false});
      }
    } else {
      this.setState({...this.state, users: []});
    }
  }

  /**
   * Method to handle when user click any item in list, call callback to parent...
   * @param {object} user
   * @returns {void}
   */
  handleUserSelected(user) {
    this.props.onUserSelected(user);
    this.setState({...this.state, users: []});
  }

  render() {
    const {
      state: {users, loading},
      handleOnChange,
      handleFocus,
      handleUserSelected,
      props: {placeholder},
    } = this;
    const {classes} = this.props;
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
        {loading && <CircularProgressAbsolute />}
        <ListItemUsers users={users} onUserSelected={handleUserSelected} />
      </>
    );
  }
}

export default withStyles(styles)(Autocomplete);
