import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import "../../../assets/ModalMsg.css";
import useStyles from "./styles";

const ModalMsg = props => {
  const classes = useStyles(props);
  if (props.success) {
    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <svg
              className="modal-msg"
              version="1.1"
              viewBox="0 0 130.2 130.2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="path circle"
                cx="65.1"
                cy="65.1"
                fill="none"
                r="62.1"
                stroke="#73AF55"
                strokeMiterlimit="10"
                strokeWidth="6"
              />
              <polyline
                className="path check"
                fill="none"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
                stroke="#73AF55"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="6"
              />
            </svg>
            <p className="modal-msg-p success">{props.msg}...</p>
          </Paper>
        </div>
      </>
    );
  }
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <svg
            className="modal-msg"
            version="1.1"
            viewBox="0 0 130.2 130.2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path circle"
              cx="65.1"
              cy="65.1"
              fill="none"
              r="62.1"
              stroke="#D06079"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6"
              x1="34.4"
              x2="95.8"
              y1="37.9"
              y2="92.3"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6"
              x1="95.8"
              x2="34.4"
              y1="38"
              y2="92.2"
            />
          </svg>
          <p className="modal-msg-p error">{props.msg}...</p>
        </Paper>
      </div>
    </>
  );
};

export default ModalMsg;
