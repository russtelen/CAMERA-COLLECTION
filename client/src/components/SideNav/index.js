import React from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));
const SideNav = ({
  collectionsClicked,
  camerasClicked,
  addNewCollectionClicked,
  loginClicked,
  registerClicked,
  logoutClicked,
  user,
}) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => collectionsClicked()}>
          <ListItemText primary="Collections" />
        </ListItem>
        <ListItem button onClick={() => camerasClicked()}>
          <ListItemText primary="Cameras" />
        </ListItem>
        <ListItem button onClick={() => addNewCollectionClicked()}>
          <ListItemText primary="Add New Collection" />
        </ListItem>
        {!user ? (
          <>
            <ListItem button onClick={() => loginClicked()}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => registerClicked()}>
              <ListItemText primary="Register" />
            </ListItem>
          </>
        ) : (
          <ListItem button onClick={() => logoutClicked()}>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default SideNav;
