import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SideNav from "../../components/SideNav";
import { useHistory } from "react-router-dom";

const SideNavPage = () => {
  const { user } = useContext(UserContext);
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
      user={user && user}
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
