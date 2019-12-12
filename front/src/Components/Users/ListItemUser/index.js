import React from "react";
import List from "@material-ui/core/List";
import ItemUser from "../ItemUser";
import useStyles from "./styles";

const ListItemUsers = ({ users, onUserSelected }) => {
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

export default ListItemUsers;