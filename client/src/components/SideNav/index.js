import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon } from "@material-ui/core";

import QueueIcon from "@material-ui/icons/Queue";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Collections" />
        </ListItem>
        <ListItem button onClick={() => camerasClicked()}>
          <ListItemIcon>
            <CameraEnhanceIcon />
          </ListItemIcon>
          <ListItemText primary="Cameras" />
        </ListItem>
        <ListItem button onClick={() => addNewCollectionClicked()}>
          <ListItemIcon>
            <QueueIcon />
          </ListItemIcon>
          <ListItemText primary="Add New Collection" />
        </ListItem>
        {!user ? (
          <>
            <ListItem button onClick={() => loginClicked()}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button onClick={() => registerClicked()}>
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </>
        ) : (
          <ListItem button onClick={() => logoutClicked()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default SideNav;
