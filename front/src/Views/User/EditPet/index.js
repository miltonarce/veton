import React from "react";
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

class EditPet extends React.Component {

    state = {
        isLoading: true,
        breeds: [],
        types: [],
        statusPet: {},
    };

    //Get breeds and type to populate form
    //Promise all to better solution
    async componentDidMount() {
        const { state } = this;
        try {
            this.setState({ ...state, isLoading: true });
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
        this.setState({ ...state, isLoading: true });
        try {
            const { id_pet, ...request } = pet;
            const { data } = await Api.pets.editPet(id_pet, request);
            if (data.success) {
                this.setState({
                    ...state,
                    isLoading: true,
                    statusPet: { msg: data.msg, type: data.success },
                });
            } else {
                this.setState({
                    ...state,
                    isLoading: false,
                    statusPet: { msg: data.msg, type: data.success },
                });
            }
        } catch (err) {
            console.log('ERR AL EDITAR LA MASCOTA', err);
            this.setState({ ...state, isLoading: false, statusPet: err });
        }
    };

    render() {
        const { breeds, types, isLoading, statusPet } = this.state;
        const { handleOnSubmit } = this;
        const defaultValues = this.props.location.state;
        return (
            <>
                <CssBaseline />
                {statusPet.msg && (
                    <AlertMsg hasSuccess={statusPet.type} msg={statusPet.msg} />
                )}
                <Container fixed>
                    <TitlePages
                        subtitle=" Aquí podrás editar los datos de tu mascota, recordá completar los datos solicitados."
                        title="Editar mascota"
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
                                    title="Ingrese los datos de la mascota"
                                    types={types}
                                    onSubmit={handleOnSubmit}
                                    defaultValues={defaultValues}
                                    nameButton="EDITAR"
                                />
                            </Grid>
                        </Grid>
                    )}
                    {isLoading && <CircularProgress color="secondary" />}
                </Container>
            </>
        );
    }
}

export default EditPet;