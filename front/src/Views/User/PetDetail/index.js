import React from "react";
import Api from "../../../Services/Api";
import calculateAge from "../../../Utils/globals";
import ListHistories from "../../../Components/ListHistories";
import { Link } from "react-router-dom";

class PetDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPet: {},
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    try {
      const { data } = await Api.pet.fetch(this.props.match.params.id);
      this.setState({
        ...this.state,
        dataPet: data,
        isLoading: false
      });
    } catch (error) {
      console.log("error", error);
      this.setState({ ...this.state, isLoading: false, error: true });
    }
  }

  render() {
    const { dataPet, isLoading, error } = this.state;
    if (isLoading) {
      return (
        <div className="veton-container-spinner">
          <div>
            Spinner
          </div>
        </div>
      );
    } else {
      if (error) {
        return <p>Se produjo un error</p>;
      }
    }
    return (
      <div className="veton-container">
        <div className="veton-container__hero-row">
          <h2>Mi mascota</h2>
        </div>
        <div className="veton-container__main-veton">
          <div className="veton-container__main-veton__data-pet">
            <div className="veton-container__main-veton__data-pet__image">
              <div className="veton-container__main-veton__data-pet__image__content">
                <img
                  src={
                    dataPet.image
                      ? `http://api.veton/imgs/${dataPet.image}`
                      : "https://via.placeholder.com/300x200"
                  }
                  alt={dataPet.name}
                />
              </div>
            </div>
            <div className="veton-container__main-veton__data-pet__info">
              <div className="veton-container__main-veton__data-pet__info__title">
                <h3>{`${dataPet.name} ${dataPet.last_name}`}</h3>
              </div>
              <div className="veton-container__main-veton__data-pet__info__data1">
                <div className="veton-container__main-veton__data-pet__info__data1__breed">
                  <div className="veton-container__main-veton__data-pet__info__data1__breed__title">
                    RAZA
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data1__breed__data">
                    {dataPet.breed.breed}
                  </div>
                </div>
                <div className="veton-container__main-veton__data-pet__info__data1__color">
                  <div className="veton-container__main-veton__data-pet__info__data1__color__title">
                    COLORES
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data1__color__data">
                    {dataPet.colors}
                  </div>
                </div>
                <div className="veton-container__main-veton__data-pet__info__data1__weight">
                  <div className="veton-container__main-veton__data-pet__info__data1__weight__title">
                    PESO
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data1__weight__data">
                    {dataPet.weight} Kg.
                  </div>
                </div>
              </div>
              <div className="veton-container__main-veton__data-pet__info__data2">
                <div className="veton-container__main-veton__data-pet__info__data2__age">
                  <div className="veton-container__main-veton__data-pet__info__data2__age__title">
                    EDAD
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data2__age__data">
                    {calculateAge(dataPet.birthday)}
                  </div>
                </div>
                <div className="veton-container__main-veton__data-pet__info__data2__birthday">
                  <div className="veton-container__main-veton__data-pet__info__data2__birthday__title">
                    CUMPLEAÑOS
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data2__birthday__data">
                    {dataPet.birthday}
                  </div>
                </div>
                <div className="veton-container__main-veton__data-pet__info__data2__gender">
                  <div className="veton-container__main-veton__data-pet__info__data2__gender__title">
                    GÉNERO
                  </div>
                  <div className="veton-container__main-veton__data-pet__info__data2__gender__data">
                    {dataPet.gender.gender}
                  </div>
                </div>
              </div>
            </div>
            <div className="veton-container__main-veton__data-pet__comments">
              <div className="veton-container__main-veton__data-pet__comments__title">
                COMENTARIOS
              </div>
              <p className="veton-container__main-veton__data-pet__comments__text">
                {dataPet.comments}
              </p>
            </div>
          </div>
          <div className="veton-container__main-veton__history-pet">
            <h3>Historia Clínica</h3>
            <div className="veton-container__main-veton__history-pet__data">
              {dataPet.clinical_history.length > 0 ? (
                <ListHistories histories={dataPet.clinical_history} />
              ) : (
                  <>
                    <p>No hay historias clínicas registradas.</p>
                    <Link to={`/veterinary/add-clinical-history/${dataPet.id_pet}`}>
                      Agregar Historia
                    </Link>
                  </>
                )}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default PetDetail;
