import React from 'react';
import Api from '../../../Services/Api';
import Spinner from '../../../Components/Spinner';

class PetDetail extends React.PureComponent {
  state = {
    dataPet: {},
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const dataPet = await Api.pet.fetch(this.props.match.params.id);
      this.setState({ ...this.state, dataPet: dataPet.data, isLoading: false });
    } catch (error) {
      this.setState({ ...this.state, isLoading: false, error: true });
      console.log('error');
    }
  }

  render() {
    const { dataPet, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    return (
      <div className="container">
        <div className="my-pets">
          <h2> Mascota {dataPet.name}</h2>
        </div>
      </div>
    );
  }
}

export default PetDetail;
