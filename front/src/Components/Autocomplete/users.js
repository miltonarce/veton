import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e8e8e8",
    color: "#212121",
    padding: 0,
    position: "absolute",
    border: "0 20px 0 20px",
    borderRadius: "0 20px",
    zIndex: 99999999,
  },
  inline: {
    display: "inline",
  },
}));

// Component item to show info user in autocomplete
const ItemUser = ({name, last_name, email, image, onUserSelected}) => (
  <ListItem button alignItems="flex-start" onClick={onUserSelected}>
    <ListItemAvatar>
      <Avatar
        alt={name}
        src={
          image
            ? `http://api.veton/imgs/${image}`
            : "https://via.placeholder.com/300x200"
        }
      />
    </ListItemAvatar>
    <ListItemText primary={`${last_name}, ${name}`} secondary={email} />
    <Divider component="li" variant="inset" />
  </ListItem>
);

// Component to retrieve in list all users by autocomplete...
export default function ListItemUsers({users, onUserSelected}) {
  const classes = useStyles();
  return (
    <List className={classes.root} component="nav">
      {users.map((user, index) => (
        <ItemUser
          {...user}
          key={index}
          onUserSelected={() => onUserSelected(user)}
        />
      ))}
    </List>
  );
}
