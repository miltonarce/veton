import React from "react";
import ApiVet from "../../Services/ApiVet";
import ListItemUsers from "./users";
import {
    CircularProgress,
    TextField
} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";

class Autocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            showListUsers: false,
            loading: false,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
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

    render() {
        const { state: { users, loading }, handleOnChange, handleFocus, props: { onUserSelected, placeholder } } = this;
        return (
            <React.Fragment>
                <TextField placeholder={placeholder} fullWidth required onChange={handleOnChange} onBlur={handleFocus} onFocus={handleFocus} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    ),
                }} />
                {loading && <CircularProgress />}
                <ListItemUsers users={users} onUserSelected={onUserSelected} />
            </React.Fragment>
        );
    }

}

export default Autocomplete;