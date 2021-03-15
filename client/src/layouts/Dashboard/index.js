import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import SideNavPage from "../SideNavPage";
import HeaderPage from "../HeaderPage";
import CollectionPage from "../CollectionPage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const drawer = <SideNavPage />;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <HeaderPage drawer={drawer} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/collections" />
            </Route>
            <Route exact path="/collections">
              <CollectionPage />
            </Route>
            <Route exact path="/collections/:collectionId">
              <p>Collection detail</p>
            </Route>
            <Route exact path="/cameras">
              <p>Cameras</p>
            </Route>
            <Route exact path="/addNewCollection">
              <p>Add new collection form</p>
            </Route>
            <Route exact path="/login">
              <p>Login form</p>
            </Route>
            <Route exact path="/register">
              <p>Register form</p>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default Dashboard;
