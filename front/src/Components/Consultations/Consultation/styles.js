import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    consultList: {
        background: "#f3f3f3",
        borderRadius: "23px",
        marginTop: "1rem",
        marginBottom: "1rem",
        color: "#5c2299",
        transition: ".5s",
        padding: "5px",
        "&:hover": {
            background: "#dbdbdb",
            cursor: "pointer",
        },
    },
    ContentLink: {
        textDecoration: "none",
    },
    centerElements: {
        textAlign: "center",
    },
    button: {
        marginLeft: "3rem",
    },
}));

export default useStyles;