import React from "react";
import FormConsultation from "../../../Components/Forms/FormConsultation";
import ApiVet from "../../../Services/ApiVet";
import {AppContext} from "../../../Store";

class AddConsultation extends React.Component {
  state = {
    statusConsultation: {},
  };

  handleOnSubmit = async request => {
    const errorAlert = {msg: "Se produjo un error", type: "danger"};
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success",
    };

    const {
      martch: {
        params: {idHistory},
      },
    } = this.props;

    const {state} = this;

    try {
      const {data} = await ApiVet.consultations.create(idHistory, request);
      if (data.sucess) {
        this.setState({...state, statusConsultation: successAlert});
      } else {
        this.setState({...state, statusConsultation: errorAlert});
      }
    } catch (err) {
      this.setState({...state, statusConsultation: errorAlert});
    }
  };

  render() {
    const {statusConsultation} = this.state;
    const {handleOnSubmit} = this;
    const {
      auth: {user},
    } = this.context;
    return (
      <React.Fragment>
        {statusConsultation.msg && "Alert"}
        <FormConsultation
          title="Registrar Consulta"
          user={user}
          onSubmit={handleOnSubmit}
        />
      </React.Fragment>
    );
  }
}

AddConsultation.contextType = AppContext;

export default AddConsultation;
