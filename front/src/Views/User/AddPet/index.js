import React from "react";

import FormAddPet from "../../../Components/Forms/Pet";
import Api from "../../../Services/Api";

class AddPet extends React.Component {
  state = {
    isLoading: true,
    breeds: [],
    types: [],
    statusPet: {},
  };

  async componentDidMount() {
    const {state} = this;
    try {
      this.setState({...state, isLoading: true});
      const [breeds, types] = await Promise.all([
        Api.breeds.fetch(),
        Api.types.fetch(),
      ]);
      this.setState({
        ...state,
        breeds: breeds.data,
        types: types.data,
        isLoading: false,
      });
    } catch (err) {
      this.setState({...state, isLoading: false});
    }
  }

  handleOnSubmit = async pet => {
    const errorAlert = {msg: "Se produjo un error", type: "danger"};
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success",
    };

    const {state} = this;
    try {
      const {data} = await Api.pets.createPet(pet);
      if (data.sucess) {
        this.setState({...state, statusPet: successAlert});
      } else {
        this.setState({...state, statusPet: errorAlert});
      }
    } catch (err) {
      this.setState({...state, statusPet: errorAlert});
    }
  };

  render() {
    const {breeds, types, isLoading, statusPet} = this.state;
    const {handleOnSubmit} = this;
    return (
      <React.Fragment>
        {statusPet.msg && "Alert"}
        {!isLoading && (
          <FormAddPet
            breeds={breeds}
            title="Registar Mascota"
            types={types}
            onSubmit={handleOnSubmit}
          />
        )}
      </React.Fragment>
    );
  }
}

export default AddPet;
