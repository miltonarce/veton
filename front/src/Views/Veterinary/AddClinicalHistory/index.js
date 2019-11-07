import React from "react";
import FormClinicalHistory from "../../../Components/Forms/FormClinicalHistory";
import Api from "../../../Services/Api";

class AddClinicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusClinicalHistory: {},
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  /**
   * Method to handle submit from form create new clinical history
   * @param {object} request
   * @returns {void}
   */
  async handleOnSubmit(request) {
    const errorAlert = {msg: "Se produjo un error", type: "danger"};
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success",
    };

    const {
      match: {
        params: {idPet},
      },
    } = this.props;
    const {state} = this;
    try {
      const {data} = await Api.clinicalhistories.create(idPet, request);
      if (data.success) {
        this.setState({...state, statusClinicalHistory: successAlert});
      } else {
        this.setState({...state, statusClinicalHistory: errorAlert});
      }
    } catch (err) {
      this.setState({...state, statusClinicalHistory: errorAlert});
    }
  }

  render() {
    const {statusClinicalHistory} = this.state;
    const {handleOnSubmit} = this;
    return (
      <>
        {statusClinicalHistory.msg && "ALert"}
        <FormClinicalHistory
          title="Registrar Historia Clínica"
          onSubmit={handleOnSubmit}
        />
      </>
    );
  }
}

export default AddClinicalHistory;
