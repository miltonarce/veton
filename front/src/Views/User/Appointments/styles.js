import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = {
    TitleAppointment: {
        fontWeight: 500,
        marginBottom: "1rem",
        textAlign: "center",
    },
};

const AppointmentLink = styled(Link)({
    textDecoration: "none",
});

export {
    styles,
    AppointmentLink,
}