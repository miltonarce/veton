import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const TitlePages = ({ title, subtitle, classes }) => (
  <>
    <Typography className={classes.title} component="h2" variant="h2">
      {title}
    </Typography>
    <Typography className={classes.subTitle} component="p">
      {subtitle}
    </Typography>
  </>
);

export default withStyles(styles)(TitlePages);
