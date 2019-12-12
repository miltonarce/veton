import React, { Component } from "react";
import { Snackbar, SnackbarContent, IconButton } from "@material-ui/core";
import { Close, CheckCircleOutline, ErrorOutline } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class AlertMsg extends Component {
    state = {
        openMsg: false,
    };

    componentDidMount() {
        this.setState({ openMsg: true });
    }

    handleClose = () => {
        this.setState({ openMsg: false });
    };

    render() {
        const { openMsg } = this.state;
        const { msg, hasSuccess, classes } = this.props;
        const { handleClose } = this;
        if (!hasSuccess)
            return (
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    autoHideDuration={6000}
                    className={classes.snack}
                    open={openMsg}
                    variant="error"
                    onClose={handleClose}
                >
                    <SnackbarContent
                        action={[
                            <IconButton
                                key="close"
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                <Close />
                            </IconButton>,
                        ]}
                        className={classes.error}
                        message={
                            <span className={classes.spanSnack}>
                                <ErrorOutline className={classes.iconCheck} />
                                {msg}
                            </span>
                        }
                    />
                </Snackbar>
            );
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                autoHideDuration={6000}
                className={classes.snack}
                open={openMsg}
                variant="success"
                onClose={handleClose}
            >
                <SnackbarContent
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={handleClose}
                        >
                            <Close />
                        </IconButton>,
                    ]}
                    className={classes.succes}
                    message={
                        <span className={classes.spanSnack}>
                            <CheckCircleOutline className={classes.iconCheck} />
                            {msg}
                        </span>
                    }
                />
            </Snackbar>
        );
    }
}

export default withStyles(styles)(AlertMsg);
