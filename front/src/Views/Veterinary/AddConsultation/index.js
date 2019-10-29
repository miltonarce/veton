import React from "react";
import FormConsultation from "../../../Components/Forms/FormConsultation";
import ApiVet from "../../../Services/ApiVet";

import Consumer from "../../../Store";

class AddConsultation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusConsultation: {}
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async handleOnSubmit(request) {
    const errorAlert = { msg: "Se produjo un error", type: "danger" };
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success"
    };
    const { idHistory } = this.props.match.params;
    try {
      const { data } = await ApiVet.consultations.create(idHistory, request);
      if (data.sucess) {
        this.setState({ ...this.state, statusConsultation: successAlert });
      } else {
        this.setState({ ...this.state, statusConsultation: errorAlert });
      }
    } catch (err) {
      this.setState({ ...this.state, statusConsultation: errorAlert });
    }
  }

  render() {
    const { statusConsultation } = this.state;
    const { handleOnSubmit } = this;
    return (
      <React.Fragment>
        {statusConsultation.msg && (
          "Alert"
        )}
        <Consumer>
          {
            value => (
              <FormConsultation
                title="Registrar Consulta"
                onSubmit={handleOnSubmit}
                user={value}
              />)}
        </Consumer>
      </React.Fragment>
    );
  }
}

export default AddConsultation;
