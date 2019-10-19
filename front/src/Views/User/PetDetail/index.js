import React from 'react';
import Api from '../../../Services/Api';
import Spinner from '../../../Components/Spinner';

import calculateAge from '../../../utils/globals';

class PetDetail extends React.PureComponent {
  state = {
    dataPet: {},
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const dataPet = await Api.pet.fetch(this.props.match.params.id);
      setTimeout(() => {
        this.setState({ ...this.state, dataPet: dataPet.data, isLoading: false });
      }, 1000)

    } catch (error) {
      this.setState({ ...this.state, isLoading: false, error: true });
      console.log('error');
    }
  }

  render() {
    const { dataPet, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="veton-container-spinner">
          <div>
            <Spinner />
          </div>
        </div>
      );
    return (
      <div className="veton-container">
        <div className="veton-container__hero-row">
          <h2>Mi mascota</h2>
        </div>
        <div className="veton-container__main-veton">
          <div className="veton-container__main-veton__data-pet">
            <div className="veton-container__main-veton__data-pet__image" >
              <div className="veton-container__main-veton__data-pet__image__content">
                <img
                  src={dataPet.image ? `http://api.veton/imgs/${dataPet.image}` : 'https://via.placeholder.com/300x200'}
                  alt={dataPet.name}
                />
              </div>
            </div>
            <div className="veton-container__main-veton__data-pet__info" >
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
            <div className="veton-container__main-veton__data-pet__comments" >
              <div className="veton-container__main-veton__data-pet__comments__title">
                COMENTARIOS
              </div>
              <p className="veton-container__main-veton__data-pet__comments__text">
                {dataPet.comments}
              </p>
            </div>
          </div>
          <div className="veton-container__main-veton__history-pet">
            <div className="veton-container__main-veton__history-pet__actions">
              <div className="veton-container__main-veton__history-pet__actions__row">
                <div>
                  <button>Historia Clínica</button>
                </div>
                <div>
                  <button>Consultas</button>
                </div>
              </div>
            </div>
            <div className="veton-container__main-veton__history-pet__data">
              {
                dataPet.clinical_history ?
                  <div className="veton-container__main-veton__history-pet__data__container">
                    <div className="veton-container__main-veton__history-pet__data__container__data">
                      <div className="veton-container__main-veton__history-pet__data__container__data__id">
                        <div className="veton-container__main-veton__history-pet__data__container__data__id__title">
                          #ID HISTORIA
                    </div>
                        <div className="veton-container__main-veton__history-pet__data__container__data__id__info">
                          {dataPet.clinical_history.id_history}
                        </div>
                      </div>
                      <div className="veton-container__main-veton__history-pet__data__container__data__date-init">
                        <div className="veton-container__main-veton__history-pet__data__container__data__date-init__title">
                          FECHA DE INICIO DE HISTORIA CLÍNICA
                    </div>
                        <div className="veton-container__main-veton__history-pet__data__container__data__date-init__info">
                          {dataPet.clinical_history.created_at}
                        </div>
                      </div>
                      <div className="veton-container__main-veton__history-pet__data__container__data__date-update">
                        <div className="veton-container__main-veton__history-pet__data__container__data__date-update__title">
                          FECHA DE ÚLTIMA ACTUALIZACIÓN
                    </div>
                        <div className="veton-container__main-veton__history-pet__data__container__data__date-update__info">
                          {dataPet.clinical_history.updated_at}
                        </div>
                      </div>
                      <div className="veton-container__main-veton__history-pet__data__container__data__afflictions">
                        <div className="veton-container__main-veton__history-pet__data__container__data__afflictions__title">
                          AFLICCIONES
                    </div>
                        <div className="veton-container__main-veton__history-pet__data__container__data__afflictions__info">
                          {dataPet.clinical_history.afflictions_procedures}
                        </div>
                      </div>
                      <div className="veton-container__main-veton__history-pet__data__container__data__observations">
                        <div className="veton-container__main-veton__history-pet__data__container__data__observations__title">
                          OBSERVACIONES
                    </div>
                        <div className="veton-container__main-veton__history-pet__data__container__data__observations__info">
                          {dataPet.clinical_history.comments}
                        </div>
                      </div>
                    </div>
                    <div className="veton-container__main-veton__history-pet__data__container__images">
                      <div className="veton-container__main-veton__history-pet__data__container__images__title">
                        IMÁGENES
                  </div>
                      <div className="veton-container__main-veton__history-pet__data__container__images__info">
                        <div>
                          <i className="material-icons">move_to_inbox</i><br />Aún no se han cargado imágenes
                    </div>
                      </div>
                    </div>
                  </div>
                  : <p>No hay historia clínica registrada.</p>
              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default PetDetail;
