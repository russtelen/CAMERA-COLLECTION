import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import SideNav from "../../components/SideNav";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../network";

const SideNavPage = () => {
  const { user, setUser } = useContext(UserContext);
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

  const logoutClicked = async () => {
    const data = await logoutUser();
    if (data) {
      localStorage.removeItem("token");
      setUser(null);
      alert("logged out !");
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
