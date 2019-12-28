export default {
    Appbar: {
        background: "white",
    },
    Logo: {
        width: "121px",
        height: "42px",
        backgroundImage: "url('assets/Logo.png')",
        fontSize: 0,
    },
    ContentLogo: { flexGrow: 1 },
    ButtonLogout: {
        color: "#999999",
    },
    ContentLink: {
        marginRight: "2rem",
        textDecoration: "none",
        color: "#999999",
        "&:hover": {
            color: "#5c2299",
            transition: ".5s",
        },
    },
    ContentIcon: { marginRight: ".5rem", cursor: "pointer" },
    ContainerFlex: {
        display: "flex",
        position: "relative",
        alignItems: "center",
    },
    Icons: {
        verticalAlign: "text-bottom",
        marginRight: "10px",
    },
};