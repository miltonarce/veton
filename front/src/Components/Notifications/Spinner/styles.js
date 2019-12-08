import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        zIndex: "2",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: "#6d6a6a85",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "60%",
        maxWidth: "680px",
        height: "min-content",
        padding: "3rem",
        paddingBottom: 0,
        textAlign: "center",
        borderRadius: "23px",
        backgroundColor: "white",
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        justifyCcontent: "center",
        alignItems: "center",
        justifyItems: "center",
    },
    Spinner: {
        width: "100%",
        maxWidth: "360px",
        display: "block",
    },
    Logo: {
        maxWidth: "360px",
        display: "block",
    },
});

export default useStyles;