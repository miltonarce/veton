import React from "react";
import { Typography, Box } from "@material-ui/core";

const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            aria-labelledby={`scrollable-auto-tab-${index}`}
            component="div"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            role="tabpanel"
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
};

export default TabPanel;
