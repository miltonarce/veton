import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        borderRadius: "23px",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    title: {
        color: "#5C2299",
        marginBottom: 0,
    },
    ContentLink: {
        textDecoration: "none",
    },
    panelTab: {
        width: "100%",
    },
    button: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginLeft: "1rem",
    },
    first: {
        marginTop: "-.5rem",
        marginBottom: "1rem",
    },
    second: {
        marginTop: "2rem",
    },
}));

export default useStyles;