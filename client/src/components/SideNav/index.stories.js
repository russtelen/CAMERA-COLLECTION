import React from "react";
import { actions } from "@storybook/addon-actions";

import SideNav from "./index";

export default {
  title: "SideNav",
  component: SideNav,
};

const events = actions({
  collectionsClicked: "collections clicked",
  camerasClicked: "cameras clicked",
  addNewCollectionClicked: "add new collection",
  loginClicked: "login clicked",
  registerClicked: "register clicked",
  logoutClicked: "log out clicked",
});

export const LoggedIn = () => <SideNav {...events} user={true} />;
export const LoggedOut = () => <SideNav {...events} user={false} />;
