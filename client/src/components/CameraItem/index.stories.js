import React from "react";
import { actions } from "@storybook/addon-actions";

import CameraItem from "./index";

export default {
  title: "CameraItem",
  component: CameraItem,
};

const camera = {
  _id: "604c4555ea7fe68e75af3e58",
  title: "Mamiya C330",
  imageUrl: "https://www.35mmc.com/wp-content/uploads/2020/05/FMC9846.jpg",
  year: 1969,
  filmType: "120",
  _collection: "604c4555ea7fe68e75af3e56",
  description:
    "The C330 was released in 1969 as part of the Mamiya C series of interchangeable lens medium format TLR cameras. It is an improved version of the Mamiya C33.",
  user: {
    _id: "604c4554ea7fe68e75af3e54",
    email: "russ@gmail.com",
    username: "russ",
    __v: 0,
  },
  __v: 0,
};

const events = actions({
  cardClicked: "card clicked",
  editClicked: "edit clicked",
  deleteClicked: "delete clicked",
});

export const Default = () => <CameraItem {...events} camera={camera} />;
