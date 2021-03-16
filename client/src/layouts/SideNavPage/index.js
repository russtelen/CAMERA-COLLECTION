import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SideNav from "../../components/SideNav";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../network";
import toastr from "toastr";

const SideNavPage = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const collectionsClicked = () => {
    if (!user) {
      return toastr["warning"](`You need to be logged in to do that`);
    }
    history.push("/collections");
  };

  const camerasClicked = () => {
    if (!user) {
      return toastr["warning"](`You need to be logged in to do that`);
    }
    history.push("/cameras");
  };

  const addNewCollectionClicked = () => {
    if (!user) {
      return toastr["warning"](`You need to be logged in to do that`);
    }
    history.push("/addNewCollection");
  };

  const loginClicked = () => {
    history.push("/login");
  };

  const registerClicked = () => {
    history.push("/register");
  };

  const logoutClicked = async () => {
    const data = await logoutUser();
    if (data) {
      localStorage.removeItem("token");
      setUser(null);
      toastr["success"](`Succesfully logged out`);
    }
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
