import React from "react";
import {withRouter} from "react-router-dom";
import {
  Container,
  CssBaseline,
  CircularProgress,
  Grid,
} from "@material-ui/core";

import FormAddPet from "../../../Components/Forms/Pet";
import Api from "../../../Services/Api";
import TitlePages from "../../../Components/TitlePages";
import AlertMsg from "../../../Components/Messages/AlertMsg";

class AddPet extends React.Component {
  state = {
    isLoading: true,
    breeds: [],
    types: [],
    statusPet: {},
  };

  async componentDidMount() {
    const {state} = this;
    try {
      this.setState({...state, isLoading: true});
      const [breeds, types] = await Promise.all([
        Api.breeds.fetch(),
        Api.types.fetch(),
      ]);
      this.setState({
        ...state,
        breeds: breeds.data,
        types: types.data,
        isLoading: false,
      });
    } catch (err) {
      this.setState({...state, isLoading: false});
    }
  }

  handleOnSubmit = async pet => {
    const {state} = this;
    const {history} = this.props;
    this.setState({...state, isLoading: true});
    try {
      const {data} = await Api.pets.createPet(pet);
      if (data.success) {
        this.setState({
          ...state,
          isLoading: true,
          statusPet: {msg: data.msg, type: data.success},
        });
        setTimeout(() => {
          history.push(`/user/pets`);
        }, 3000);
      } else {
        this.setState({
          ...state,
          isLoading: false,
          statusPet: {msg: data.msg, type: data.success},
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({...state, isLoading: false, statusPet: err});
    }
  };

  render() {
    const {breeds, types, isLoading, statusPet} = this.state;
    const {handleOnSubmit} = this;
    return (
      <React.Fragment>
        <CssBaseline />
        {statusPet.msg && (
          <AlertMsg hasSuccess={statusPet.type} msg={statusPet.msg} />
        )}
        <Container fixed>
          <TitlePages
            subtitle=" Aquí podrás agrgar una nueva mascota, recordá completar los datos solicitados."
            title="Agregar nueva mascota"
          />
          {!isLoading && (
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
            >
              <Grid item xs={7}>
                <FormAddPet
                  breeds={breeds}
                  title="Ingrese los datos de la mascota Mascota"
                  types={types}
                  onSubmit={handleOnSubmit}
                />
              </Grid>
            </Grid>
          )}
          {isLoading && <CircularProgress color="secondary" />}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(props => <AddPet {...props} />);
