import React from "react";
import PropTypes from "prop-types";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    const { handleOnChange, handleOnSubmit } = this;
    const { placeholder } = this.props;
    return (
      <div className="searchbox">
        <form className="searchbox__form" onSubmit={handleOnSubmit}>
          <div className="form-group has-search">
            <i className="material-icons form-control-feedback">search</i>
            <input
              className="form-control searchbox__input"
              type="search"
              placeholder={placeholder}
              onChange={handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }

  /**
   * Handle event submit send input by user
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  /**
   * Handle event change input searchbox
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange(event) {
    this.setState({ ...this.state, search: event.target.value });
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchBox;
