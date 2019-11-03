import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: 0,
    },
    inline: {
        display: "inline",
    },
}));

const ItemUser = ({ name, last_name, email, image, onUserSelected }) => {
    return (
        <ListItem
            alignItems="flex-start"
            button
            onClick={onUserSelected}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={image ? image : "https://via.placeholder.com/300x200"} />
            </ListItemAvatar>
            <ListItemText
                primary={`${last_name}, ${name}`}
                secondary={email}
            />
            <Divider variant="inset" component="li" />
        </ListItem>
    )
};

export default function ListItemUsers({ users, onUserSelected }) {
    const classes = useStyles();
    return (
        <List component="nav" className={classes.root}>
            {users.map((user, index) => <ItemUser {...user} key={index} onUserSelected={() => onUserSelected(user)} />)}
        </List>
    );
}