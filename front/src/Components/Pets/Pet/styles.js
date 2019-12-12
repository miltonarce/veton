import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardMedia,
    Typography,
    Paper,
    Button,
} from "@material-ui/core";

const CardPet = styled(Card)({
    maxWidth: 306,
    minWidth: 306,
    maxHeight: 436,
    minHeight: 436,
    borderRadius: "23px",
    overflow: "visible",
    boxShadow: "00px 3px 50px -27px rgba(0,0,0,0.75)",
});

const CardPetMedia = styled(CardMedia)({
    height: 210,
    width: 210,
    borderRadius: "150px",
    position: "absolute",
    top: "-14px",
    left: "46px",
    boxShadow: "0px 3px 11px 5px rgba(0, 0, 0, 0.16)",
});

const ContentMedia = styled("div")({
    position: "relative",
    width: "100%",
    height: 195,
});

const CardPetHeader = styled(CardHeader)({
    paddingBottom: "0px",
    "& div": {
        overflow: "hidden",
        "& span": {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        },
        "& span:first-child": {
            color: "#4E4E4E",
            fontSize: "1.87rem",
            fontWeight: "800",
        },
    },
});

const PinkTypo = styled(Typography)({
    fontWeight: 500,
});

const TextTypo = styled(Typography)({
    color: "#4E4E4E",
});

const CardPaper = styled(Paper)({
    background: "#F2F2F2",
    borderRadius: 11,
    boxShadow: "none",
    padding: ".3rem",
});

const PetLink = styled(Link)({
    textDecoration: "none",
    margin: "1rem",
});

const ButtonDetailsPet = styled(Button)({
    marginBottom: "1rem",
});

export {
    CardPet,
    CardPetMedia,
    ContentMedia,
    CardPetHeader,
    PinkTypo,
    TextTypo,
    CardPaper,
    PetLink,
    ButtonDetailsPet
};