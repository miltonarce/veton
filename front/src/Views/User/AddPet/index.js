import React from "react";
import { withRouter } from "react-router-dom";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import { AddPetForm } from "../../../Components/Pets";
import { Api } from "../../../Services";
import TitlePages from "../../../Components/Shared/TitlePages";
import { ModalMsg, Spinner } from "../../../Components/Notifications";

class AddPet extends React.Component {
  state = {
    hasMsg: null,
    openMsg: false,
    success: false,
    isLoading: false,
    breeds: [],
    types: [],
    statusPet: {},
    errors: [],
  };

  // Get breeds and type to populate form
  // Promise all to better solution
  async componentDidMount() {
    const { state } = this;
    try {
      const [breeds, types] = await Promise.all([
        Api.breeds.fetch(),
        Api.types.fetch(),
      ]);
      this.setState({
        ...state,
        breeds: breeds.data,
        types: types.data,
      });
    } catch (err) {
      this.setState({ ...state, isLoading: false });
    }
  }

  /**
   * Method to handle submit pet
   * @param {object} pet
   * @returns {void}
   */
  handleOnSubmit = async pet => {
    const { state } = this;
    const { history } = this.props;
    this.setState({ ...state, isLoading: true });
    try {
      this.setState({ ...state, isLoading: true });
      const { data } = await Api.pets.createPet(pet);
      if (data.success) {
        setTimeout(() => {
          this.setState({
            ...state,
            isLoading: false,
            openMsg: true,
            hasMsg: data.msg,
            success: data.success,
          });
        }, 3000);
        setTimeout(() => {
          history.push(`/user/pets`);
        }, 6000);
      } else {
        setTimeout(() => {
          this.setState({
            ...state,
            hasMsg: data.msg,
            isLoading: false,
            openMsg: true,
            success: data.success,
          });
        }, 3000);
        setTimeout(() => {
          this.setState({
            ...state,
            openMsg: false,
          });
        }, 6000);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        const { errors } = err.response.data;
        this.setState({...state, isLoading: false, errors });
      } else {
        this.setState({
          ...state,
          isLoading: false,
          hasMsg: "Se produjo un error al registarse, por favor verifique sus datos.",
          openMsg: true,
        });
        setTimeout(() => {
          this.setState({
            ...state,
            openMsg: false,
          });
        }, 6000);
      }
    }
  };

  render() {
    const { breeds, types, openMsg, hasMsg, isLoading, success, errors } = this.state;
    const { handleOnSubmit } = this;
    return (
      <>
        <CssBaseline />
        <Container fixed>
          <TitlePages
            subtitle=" Aquí podrás agrgar una nueva mascota, recordá completar los datos solicitados."
            title="Agregar nueva mascota"
          />
          <Grid container alignItems="center" direction="row" justify="center">
            <Grid item lg={7} xs={12}>
              <AddPetForm
                breeds={breeds}
                title="Ingrese los datos de la mascota Mascota"
                types={types}
                onSubmit={handleOnSubmit}
                errors={errors}
              />
            </Grid>
          </Grid>
          {isLoading ? <Spinner /> : ""}
          {openMsg ? <ModalMsg msg={hasMsg} success={success} /> : ""}
        </Container>
      </>
    );
  }
}

// Add router to handle history push go to other page...
export default withRouter(props => <AddPet {...props} />);
