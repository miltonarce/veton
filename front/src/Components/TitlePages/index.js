import React from "react";
import {Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  title: {
    marginTop: "2rem",
    marginBottom: "0",
    color: "#4E4E4E",
    fontWeight: 600,
  },
  subTitle: {
    marginBottom: "3rem",
    color: "#999999",
    fontWeight: 300,
  },
};

const TitlePages = ({title, subtitle, classes}) => (
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
