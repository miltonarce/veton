import React from 'react';
import FormAddPet from '../../../Components/Forms/Pet/FormAddPet';
import Alert from '../../../Components/Alert';
import Api from '../../../Services/Api';

export default class AddPet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      races: {},
      types: [],
      statusPet: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const [races, types] = await Promise.all([Api.getRaces(), Api.getTypes()]);
      this.setState({
        ...this.state,
        races,
        types,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  render() {
    const { races, types, isLoading, statusPet } = this.state;
    return (
      <React.Fragment>
        {statusPet.msg && <Alert message={statusPet.msg} type={statusPet.type} />}
        {!isLoading && <FormAddPet title="Registar Mascota" types={types} races={races} onSubmit={this.handleSubmit} />}
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
      const response = await Api.createPet(pet);
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
