import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        "& label": {
            color: "#FE3090 !important",
        },
    },
    dense: {
        marginTop: theme.spacing(3),
    },
    menu: {
        width: 200,
    },
    button: {
        marginRight: "4rem",
        height: "40px",
        width: "160px",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    title: {
        color: "#5C2299",
    },
    hisImg: {
        height: "160px",
        width: "160px",
        borderRadius: "23px",
        border: "1px solid #FE3A90",
    },
    rowImg: {
        marginTop: "1rem",
    },
    ContentCardText: {
        "& p": {
            wordBreak: "break-all",
            marginTop: 0,
        },
    },
}));

export default useStyles;