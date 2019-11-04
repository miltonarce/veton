import React from "react";
import ApiVet from "../../Services/ApiVet";
import ListItemUsers from "./users";
import {
    CircularProgress,
    TextField
} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import {styled} from "@material-ui/core/styles";

const CircularProgressAbsolute = styled(CircularProgress)({
    position: "absolute",
    right: "280px",
    height: "20px !important",
    width: "20px !important",
    bottom: "20px",
});

class Autocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showListUsers: false,
            loading: false,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleUserSelected = this.handleUserSelected.bind(this);
    }

    async handleOnChange(event) {
        const { value } = event.target;
        if (value.length > 2) {
            try {
                this.setState({ ...this.state, loading: true });
                const { data } = await ApiVet.users.autocomplete(value);
                this.setState({ ...this.state, users: data, loading: false });
            } catch (err) {
                this.setState({ ...this.state, users: [], loading: false });
                console.error("Error to trying to search users", err);
            }
        } else {
            this.setState({ ...this.state, users: [] });
        }
    }

    handleUserSelected(user) {
        this.props.onUserSelected(user);
        this.setState({ ...this.state, users: [] });
    }

    render() {
        const { state: { users, loading }, handleOnChange, handleFocus, handleUserSelected, props: { placeholder } } = this;
        return (
            <React.Fragment>
                <TextField placeholder={placeholder} fullWidth required onChange={handleOnChange} onBlur={handleFocus} onFocus={handleFocus} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }} />
                {loading && <CircularProgressAbsolute />}
                <ListItemUsers users={users} onUserSelected={handleUserSelected} />
            </React.Fragment>
        );
    }

}

export default Autocomplete;