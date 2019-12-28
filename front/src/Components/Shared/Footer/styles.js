import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    Footer: {
        width: "100%",
        minheight: "200px",
        background: "#4E4E4E",
        marginTop: "1rem",
        paddingBottom: "20px",
        paddingTop: "20px",
        left: 0,
        bottom: 0,
    },
    Logo: {
        width: "140px",
    },
    TitleRs: {
        marginLeft: "70px",
        color: "#CBCBCB",
    },
    Rs: {
        color: "#CBCBCB",
        listStyle: "none",
        paddingLeft: 0,
        "& li": {
            display: "inline-block",
            marginLeft: "30px",
            marginTop: "10px",
            "& img": {
                verticalAlign: "middle",
                display: "block",
                margin: "7px auto",
            },
            "& span": {
                verticalAlign: "sub",
                marginLeft: "10px",
            },
        },
    },
    Link: {
        width: "40px",
        height: "40px",
        borderRadius: "80px",
        background: "#6b6565",
        display: "inline-block",
        "&:hover": {
            background: "#7a7171",
            cursor: "pointer",
        },
    },
});

export default useStyles;