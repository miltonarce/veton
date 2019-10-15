import React from 'react';
import PropTypes from 'prop-types';

export default class FormClinicalHistory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        comments: '',
        hide_comments: '',
        afflictions_procedures: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Method to handle submit with all data from form
   * @param {Event} event
   * @returns {void}
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.form);
  }

  /**
   * Method to handle onChange for all inputs with name and value
   * @param {Event} event
   * @returns {void}
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    const { title } = this.props;
    const { comments, hide_comments, afflictions_procedures } = this.state.form;

    return (
      <div className="container py-2">
        <h2 className="text-center">{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <span>Comentarios</span>
            <textarea name="comments" className="form-control" value={comments} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <span>Comentarios Ocultos</span>
            <textarea
              name="hide_comments"
              className="form-control"
              minLength="10"
              value={hide_comments}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <span>Aflicciones</span>
            <textarea
              name="afflictions_procedures"
              className="form-control"
              value={afflictions_procedures}
              onChange={this.handleChange}
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
  onSubmit: PropTypes.func.isRequired,
};
