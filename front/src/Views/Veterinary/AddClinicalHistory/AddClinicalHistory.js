import React from 'react';
import FormAddPet from '../../../Components/Forms/Pet/FormAddPet';
import Api from '../../../Services/Api';

class AddClinicalHistory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      breeds: {},
      types: [],
      statusPet: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      this.setState({ ...this.state, isLoading: true });
      const [breeds, types] = await Promise.all([Api.getRaces(), Api.getTypes()]);
      this.setState({
        ...this.state,
        breeds,
        types,
        isLoading: false,
      });
    } catch (err) {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  handleSubmit() {}
  render() {
    const { breeds, types } = this.state;
    return (
      <React.Fragment>
        {<FormAddPet title="Registrar Historia Clinica" types={types} races={breeds} onSubmit={this.handleSubmit} />}
      </React.Fragment>
    );
  }
}

export default AddClinicalHistory;
