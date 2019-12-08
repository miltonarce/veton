import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    Main: {
        marginTop: "2rem",
    },
    Paper: {
        borderRadius: "23px",
        padding: ".5rem",
        height: "auto",
    },
    ContentCardUserProfile: {
        marginTop: ".5rem",
    },
    ContentImage: {
        position: "relative",
        height: "8.56rem",
    },
    ImageUser: {
        top: "-0.7rem",
        width: "9.75rem",
        height: "10rem",
        position: "absolute",
        boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
        borderRadius: "123px",
        left: "2rem",
    },
    UserName: {
        color: "#4E4E4E",
        fontSize: "1.87rem",
        fontWeight: 600,
        marginBottom: "1rem",
    },
    Content: {
        margin: ".75rem",
    },
}));

export default useStyles;