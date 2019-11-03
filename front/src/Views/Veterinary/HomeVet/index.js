import React from "react";
import ListPets from "../../../Components/ListPets";

class HomeVet extends React.Component {
  state = {
    isLoading: false,
    petsList: [],
    clinicalHistories: [],
  };

  // handleOnSearch = async dni => {
  //   try {
  //     const {state, setState} = this;
  //     setState({...state, isLoading: true});
  //     const user = await ApiVet.users.fetch(dni);
  //     const petsList = await ApiVet.userPets.fetch(user.data.id_user);
  //     const clinicalHistories = await Api.clinicalhistories.all();
  //     this.setState({
  //       ...state,
  //       petsList: petsList.data,
  //       clinicalHistories: clinicalHistories.data,
  //       isLoading: false,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    const {petsList, clinicalHistories, isLoading} = this.state;
    const {handleOnSearch} = this;
    return (
      <div className="veton-container">
        <div className="veton-container__hero">
          <h2>Mis Mascotas</h2>
        </div>
        <div className="veton-container__list">
          <div className="veton-container__list__container-list">
            <div className="veton-container__list__container-list__row">
              {isLoading ? (
                "SPinner"
              ) : petsList.length > 0 ? (
                <ListPets
                  clinicalHistories={clinicalHistories}
                  pets={petsList}
                />
              ) : (
                <p>No tenes registrado ninguna mascota</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeVet;
