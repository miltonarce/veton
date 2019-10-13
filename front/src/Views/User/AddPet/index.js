import React from 'react';
import FormAddPet from '../../../Components/Forms/Pet/FormAddPet';
import Alert from '../../../Components/Alert';
import Api from '../../../Services/Api';

export default class AddPet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      breeds: [],
      types: [],
      statusPet: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const breeds = await Api.breeds.fetch();
      const types = await Api.types.fetch();
      this.setState({
        ...this.state,
        breeds: breeds.data,
        types: types.data,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  render() {
    const { breeds, types, isLoading, statusPet } = this.state;
    return (
      <React.Fragment>
        {statusPet.msg && <Alert message={statusPet.msg} type={statusPet.type} />}
        {!isLoading && (
          <FormAddPet title="Registar Mascota" types={types} breeds={breeds} onSubmit={this.handleSubmit} />
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
  async handleSubmit(pet) {
    const errorAlert = { msg: 'Se produjo un error', type: 'danger' };
    const successAlert = { msg: 'Se dió de alta correctamente!', type: 'success' };
    try {
      const response = await Api.pets.createPet(pet);
      if (response.status === 'OK') {
        this.setState({ ...this.state, statusPet: successAlert });
      } else {
        this.setState({ ...this.state, statusPet: errorAlert });
      }
    } catch (err) {
      this.setState({ ...this.state, statusPet: errorAlert });
    }
  }
}
