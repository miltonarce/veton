import React from "react";
import FormClinicalHistory from "../../../Components/Forms/FormClinicalHistory";
import Api from "../../../Services/Api";
import Alert from "../../../Components/Alert";

class AddClinicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusClinicalHistory: {}
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async handleOnSubmit(request) {
    const errorAlert = { msg: "Se produjo un error", type: "danger" };
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success"
    };
    const { idPet } = this.props.match.params;
    try {
      const { data } = await Api.clinicalhistories.create(idPet, request);
      if (data.success) {
        this.setState({ ...this.state, statusClinicalHistory: successAlert });
      } else {
        this.setState({ ...this.state, statusClinicalHistory: errorAlert });
      }
    } catch (err) {
      this.setState({ ...this.state, statusClinicalHistory: errorAlert });
    }
  }

  render() {
    const { statusClinicalHistory } = this.state;
    const { handleOnSubmit } = this;
    return (
      <React.Fragment>
        {statusClinicalHistory.msg && (
          <Alert
            message={statusClinicalHistory.msg}
            type={statusClinicalHistory.type}
          />
        )}
        <FormClinicalHistory
          title="Registrar Historia Clínica"
          onSubmit={handleOnSubmit}
        />
      </React.Fragment>
    );
  }
}

export default AddClinicalHistory;
