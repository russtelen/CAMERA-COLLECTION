import React from "react";
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
      <HeaderPage drawer={drawer} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CollectionPage />
      </main>
    </div>
  );
};

export default Dashboard;
