import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: "#fff",
        borderRadius: "23px",
        outline: "none",
        minWidth: "500px",
        maxWidth: "700px",
    },
    root: {
        flexGrow: 1,
    },

    title: {
        color: "#5C2299",
        margin: 0,
        marginBottom: "1rem",
    },
    filas: {
        marginBottom: "1rem",
    },
    tabs: {
        borderBottom: "1px solid #5c2299",
    },
}));

export default useStyles;