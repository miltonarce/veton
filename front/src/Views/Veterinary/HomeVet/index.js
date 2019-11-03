import React from "react";
import ListPets from "../../../Components/ListPets";
import Api from "../../../Services/Api";
import {CircularProgress} from "@material-ui/core";

class HomeVet extends React.Component {
  state = {
    isLoading: false,
    petsByUser: [],
    userSelected: null,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.userSelected !== this.props.userSelected) {
      console.log('cambio el valor', this.props.userSelected);
      await this.fetchPetsByUser(this.props.userSelected);
    }
  }

  fetchPetsByUser = async user => {
    try {
      this.setState({ ...this.state, isLoading: true, userSelected: user });
      const { data } = await Api.pets.fetch(user.id_user);
      this.setState({ ...this.state, petsByUser: data, isLoading: false });
    } catch (err) {
      this.setState({ ...this.state, petsByUser: [], isLoading: false });
    }
  }

  render() {
    const { petsByUser, isLoading, userSelected } = this.state;
    return (
      <div className="veton-container">
        <div className="veton-container__hero">
          <h2>Bienvenido</h2>
        </div>
        <div className="veton-container__list">
          <div className="veton-container__list__container-list">
            <div className="veton-container__list__container-list__row">
              {userSelected &&
                <div>
                  <h2>Mascotas del usuario {userSelected.name}</h2>
                  {isLoading && <CircularProgress />}
                  {!isLoading && petsByUser.length > 0 && <ListPets pets={petsByUser} />}
                  {!isLoading && petsByUser.length === 0 && <p>No existen mascotas registradas</p>}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeVet;
