import React from "react";
import PropTypes from "prop-types";

class FormClinicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        comments: "",
        hide_comments: "",
        afflictions_procedures: ""
      }
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   * Method to handle submit with all data from form
   * @param {Event} event
   * @returns {void}
   */
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.form);
  }

  /**
   * Method to handle onChange for all inputs with name and value
   * @param {Event} event
   * @returns {void}
   */
  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    const { title } = this.props;
    const { comments, hide_comments, afflictions_procedures } = this.state.form;
    const { handleOnSubmit, handleOnChange } = this;
    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea
              name="comments"
              className="form-control"
              value={comments}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <span>Comentarios Ocultos</span>
            <textarea
              name="hide_comments"
              className="form-control"
              minLength="10"
              value={hide_comments}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <span>Aflicciones</span>
            <textarea
              name="afflictions_procedures"
              className="form-control"
              value={afflictions_procedures}
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Aceptar
          </button>
        </form>
      </div>
    );
  }
}

FormClinicalHistory.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormClinicalHistory;
