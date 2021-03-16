import React from "react";
import CameraItem from "../CameraItem";

const CollectionDetail = ({
  collection,
  cameraCardClicked,
  cameraEditClicked,
  cameraDeleteClicked,
}) => {
  return (
    <div className="container">
      {!collection ? (
        <h2 className="text-center">
          You are not authorized to view this page
        </h2>
      ) : (
        <>
          <h1 className="text-center">{collection.title}</h1>
          <div className="my-5">
            <div className="row">
              {collection.cameras.map((camera) => (
                <div key={camera._id} className="col-sm-12 col-md-4 mb-4">
                  <CameraItem
                    camera={camera}
                    cameraCardClicked={cameraCardClicked}
                    cameraEditClicked={cameraEditClicked}
                    cameraDeleteClicked={cameraDeleteClicked}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionDetail;
