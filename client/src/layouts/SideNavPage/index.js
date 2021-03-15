import React from "react";
import SideNav from "../../components/SideNav";
import { useHistory } from "react-router-dom";

const SideNavPage = () => {
  const history = useHistory();
  const collectionsClicked = () => {
    history.push("/collections");
  };

  const camerasClicked = () => {
    history.push("/cameras");
  };

  const addNewCollectionClicked = () => {
    history.push("/addNewCollection");
  };

  const loginClicked = () => {
    history.push("/login");
  };

  const registerClicked = () => {
    history.push("/register");
  };

  const logoutClicked = () => {
    console.log("loggedout !");
  };
  return (
    <SideNav
      collectionsClicked={() => collectionsClicked()}
      camerasClicked={() => camerasClicked()}
      addNewCollectionClicked={() => addNewCollectionClicked()}
      loginClicked={() => loginClicked()}
      registerClicked={() => registerClicked()}
      logoutClicked={() => logoutClicked()}
    />
  );
};

export default SideNavPage;
