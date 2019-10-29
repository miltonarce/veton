import React from "react";
import FormAddPet from "../../../Components/Forms/Pet";
import Api from "../../../Services/Api";

class AddPet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      breeds: [],
      types: [],
      statusPet: {}
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const [breeds, types] = await Promise.all([
        Api.breeds.fetch(),
        Api.types.fetch()
      ]);
      this.setState({
        ...this.state,
        breeds: breeds.data,
        types: types.data,
        isLoading: false
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  render() {
    const { breeds, types, isLoading, statusPet } = this.state;
    const { handleOnSubmit } = this;
    return (
      <React.Fragment>
        {statusPet.msg && (
          "Alert"
        )}
        {!isLoading && (
          <FormAddPet
            title="Registar Mascota"
            types={types}
            breeds={breeds}
            onSubmit={handleOnSubmit}
          />
        )}
      </React.Fragment>
    );
  }

  /**
   * Method to handle submit to create a pet
   * Call Api to create pet and handle error...
   * @param {Object} pet request
   * @returns {void}
   */
  async handleOnSubmit(pet) {
    const errorAlert = { msg: "Se produjo un error", type: "danger" };
    const successAlert = {
      msg: "Se dió de alta correctamente!",
      type: "success"
    };
    try {
      const { data } = await Api.pets.createPet(pet);
      if (data.sucess) {
        this.setState({ ...this.state, statusPet: successAlert });
      } else {
        this.setState({ ...this.state, statusPet: errorAlert });
      }
    } catch (err) {
      this.setState({ ...this.state, statusPet: errorAlert });
    }
  }
}

export default AddPet;
