import React from "react";
import PropTypes from "prop-types";

class FormConsultation extends React.Component {
  state = {
    form: {
      comments: "",
      id_user: null,
      afflictions_procedures: "",
    },
  };

  componentDidMount() {
    const {props} = this;
    const {form} = this.state;
    this.setState({
      form: {...form, id_user: props.user.id_user},
    });
  }

  handleOnSubmit(event) {
    const {props, state} = this;
    event.preventDefault();
    props.onSubmit(state.form);
  }

  handleOnChange(event) {
    const {form} = this.state;
    const {name, value} = event.target;
    this.setState({form: {...form, [name]: value}});
  }

  render() {
    const {title} = this.props;
    const {
      form: {comments, afflictions_procedures},
    } = this.state;
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

FormConsultation.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormConsultation;
