import React from "react";
import PropTypes from "prop-types";

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
    const {title} = this.props;
    const {comments, hide_comments, afflictions_procedures} = this.state.form;
    const {handleOnSubmit, handleOnChange} = this;
    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea
              required
              className="form-control"
              name="comments"
              value={comments}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Comentarios Ocultos</span>
            <textarea
              required
              className="form-control"
              minLength="10"
              name="hide_comments"
              value={hide_comments}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group">
            <span>Aflicciones</span>
            <textarea
              className="form-control"
              name="afflictions_procedures"
              value={afflictions_procedures}
              onChange={handleOnChange}
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Aceptar
          </button>
        </form>
      </div>
    );
  }
}

FormClinicalHistory.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormClinicalHistory;
