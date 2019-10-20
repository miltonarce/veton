import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="searchbox">
        <form className="searchbox__form" onSubmit={this.handleSubmit}>
          <div className="form-group has-search">
            <i className="material-icons form-control-feedback">search</i>
            <input
              className="form-control searchbox__input"
              type="search"
              placeholder={this.props.placeholder}
              onChange={this.handleChange}
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
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.search);
  }

  /**
   * Handle event change input searchbox
   * @param {Event} event
   * @returns {void}
   */
  handleChange(event) {
    this.setState({ ...this.state, search: event.target.value });
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchBox;
