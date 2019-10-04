import React from 'react';
import ApiVet from '../../../Services/ApiVet';

class HomeVet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      petsList: [],
    };
  }

  async componentDidMount() {
    try {
      const petsList = await ApiVet.pets.fetch();
      this.setState({ isLoading: false, petsList: petsList.data });
    } catch (err) {








      console.log(err);
    }
  }
  render() {
    const { petsList } = this.state;
    return (
      <div>
        {petsList.map(pet => (
          <div key={pet.id}>{pet.name}</div>
        ))}
      </div>
    );
  }
}

export default HomeVet;
