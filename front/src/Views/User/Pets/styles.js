import { Link } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

const PetLink = styled(Link)({
    textDecoration: "none",
});

const ContainerMain = styled("div")({
    marginTop: "2rem",
});

export {
    PetLink,
    ContainerMain,
};