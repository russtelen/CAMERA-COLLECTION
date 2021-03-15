import React from "react";
import CollectionDetail from "../../components/CollectionDetail";

const CollectionDetailPage = () => {
  const collection = {
    cameras: [
      {
        _id: "604c4555ea7fe68e75af3e58",
        title: "Mamiya C330",
        imageUrl:
          "https://www.35mmc.com/wp-content/uploads/2020/05/FMC9846.jpg",
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
      },
      {
        _id: "604c4555ea7fe68e75af3e59",
        title: "Yashica D",
        imageUrl:
          "http://farm5.staticflickr.com/4154/4995420848_3524e0db57.jpg",
        year: 1972,
        filmType: "120",
        _collection: "604c4555ea7fe68e75af3e56",
        description:
          "A wonderful twin lens reflex system featuring a Yashikor 80mm f/3.5 lens set.  The Yashica-D has shutter speeds from 1 second to 1/500th, an aperture range of f/3.5 to f/22, a film advance lock, and upgraded ergonomic control of both shutter speeds and aperture movements.",
        user: {
          _id: "604c4554ea7fe68e75af3e54",
          email: "russ@gmail.com",
          username: "russ",
          __v: 0,
        },
        __v: 0,
      },
    ],
    _id: "604c4555ea7fe68e75af3e56",
    title: "Twin Lens Reflex",
    user: {
      _id: "604c4554ea7fe68e75af3e54",
      email: "russ@gmail.com",
      username: "russ",
      __v: 0,
    },
    __v: 1,
  };

  const cameraCardClicked = () => {
    alert("card clicked");
  };

  const cameraEditClicked = () => {
    alert("edit clicked");
  };

  const cameraDeleteClicked = () => {
    alert("delete clicked");
  };

  return (
    <CollectionDetail
      collection={collection}
      cameraCardClicked={cameraCardClicked}
      cameraEditClicked={cameraEditClicked}
      cameraDeleteClicked={cameraDeleteClicked}
    />
  );
};

export default CollectionDetailPage;
