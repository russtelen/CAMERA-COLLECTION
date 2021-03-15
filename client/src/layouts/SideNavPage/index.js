import React from "react";
import SideNav from "../../components/SideNav";

const SideNavPage = () => {
  const collectionsClicked = () => {
    console.log("View all collections");
  };

  const camerasClicked = () => {
    console.log("View all cameras");
  };

  const addNewCollectionClicked = () => {
    console.log("add new collection form");
  };

  const loginClicked = () => {
    console.log("login form ");
  };

  const registerClicked = () => {
    console.log("register form");
  };

  const logoutClicked = () => {
    console.log("loggedout !");
  };
  return (
    <SideNav
      collectionsClicked={collectionsClicked}
      camerasClicked={camerasClicked}
      addNewCollectionClicked={addNewCollectionClicked}
      loginClicked={loginClicked}
      registerClicked={registerClicked}
      logoutClicked={logoutClicked}
    />
  );
};

export default SideNavPage;
