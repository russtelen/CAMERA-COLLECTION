import React from "react"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SideNavPage from "../SideNavPage"
import HeaderPage from "../HeaderPage"
import CollectionPage from "../CollectionPage"
import CollectionDetailPage from "../CollectionDetailPage"
import LoginPage from "../LoginPage"
import useLocalStorage from "react-use-localstorage"
import NewCollectionFormPage from "../NewCollectionFormPage"
import NewCameraPage from "../NewCameraPage"
import EditCameraFormPage from "../EditCameraFormPage"

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
}))
const Dashboard = () => {
  const [token] = useLocalStorage("token")
  const classes = useStyles()

  const drawer = <SideNavPage />

  const PrivateRoute = ({ path, children }) => {
    return (
      <Route path={path}>{!!token ? children : <Redirect to="/login" />}</Route>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <HeaderPage drawer={drawer} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <PrivateRoute exact path="/">
              <Redirect to="/collections" />
            </PrivateRoute>
            <PrivateRoute exact path="/collections">
              <CollectionPage />
            </PrivateRoute>
            <PrivateRoute exact path="/collections/:collectionId">
              <CollectionDetailPage />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/collections/:collectionId/editCollection"
            >
              <p>Edit Collection</p>
            </PrivateRoute>
            <PrivateRoute exact path="/collections/:collectionId/addNewCamera">
              <NewCameraPage />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/collections/:collectionId/editCamera/:cameraId"
            >
              <EditCameraFormPage />
            </PrivateRoute>
            <PrivateRoute exact path="/cameras">
              <p>Cameras</p>
            </PrivateRoute>
            <PrivateRoute exact path="/addNewCollection">
              <NewCollectionFormPage />
            </PrivateRoute>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <p>Register form</p>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default Dashboard
