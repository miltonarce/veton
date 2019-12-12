import React from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";

const TabPanel = props => {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            aria-labelledby={`vertical-tab-${index}`}
            component="div"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            role="tabpanel"
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default TabPanel;