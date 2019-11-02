import React from "react";
import PropTypes from "prop-types";

class SearchBox extends React.Component {
  state = {
    search: "",
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const {state, props} = this;
    props.onSearch(state.search);
  };

  handleOnChange = event => {
    const {state} = this;
    this.setState({...state, search: event.target.value});
  };

  render() {
    const {handleOnChange, handleOnSubmit} = this;
    const {placeholder} = this.props;
    return (
      <div className="searchbox">
        <form className="searchbox__form" onSubmit={handleOnSubmit}>
          <div className="form-group has-search">
            <i className="material-icons form-control-feedback">search</i>
            <input
              className="form-control searchbox__input"
              placeholder={placeholder}
              type="search"
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchBox;
