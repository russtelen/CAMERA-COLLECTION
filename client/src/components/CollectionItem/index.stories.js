import React from "react";
import { actions } from "@storybook/addon-actions";

import CollectionItem from "./index";

export default {
  title: "CollectionItem",
  component: CollectionItem,
};

const collection = {
  cameras: [
    {
      _id: "604c4555ea7fe68e75af3e5a",
      title: "Canon P",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Canon_p01.jpg",
      year: 1959,
      filmType: "35mm",
      _collection: "604c4555ea7fe68e75af3e57",
      description:
        "The Canon P (P for Populaire) was a rangefinder camera produced by Canon Inc., compatible with the Leica M39 screw mount (LTM). It was introduced in March 1959 and was marketed as a low-cost sister to the Canon VI-L. A black version was also introduced, which today is quite rare. The Canon P is the predecessor to the Canon 7 rangefinder.",
      user: {
        _id: "604c4554ea7fe68e75af3e54",
        email: "russ@gmail.com",
        username: "russ",
        __v: 0,
      },
      __v: 0,
    },
  ],
  _id: "604c4555ea7fe68e75af3e57",
  title: "Rangefinder",
  user: {
    _id: "604c4554ea7fe68e75af3e54",
    email: "russ@gmail.com",
    username: "russ",
    __v: 0,
  },
  __v: 4,
};

const events = actions({
  cardClicked: "card clicked",
});

export const Default = () => (
  <CollectionItem {...events} collection={{ ...collection }} />
);
