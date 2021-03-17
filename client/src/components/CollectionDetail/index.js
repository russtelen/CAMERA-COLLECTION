import { Button, IconButton } from "@material-ui/core"
import React from "react"
import CameraItem from "../CameraItem"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

const CollectionDetail = ({
  collection,
  cameraCardClicked,
  cameraEditClicked,
  cameraDeleteClicked,
  collectionEditClicked,
  collectionDeleteClicked,
}) => {
  return (
    <div className="container">
      {!collection ? (
        <h2 className="text-center">
          You are not authorized to view this page
        </h2>
      ) : (
        <>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <h1 className="text-center">{collection.title}</h1>
              <div>
                <IconButton color="primary" onClick={collectionEditClicked}>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={collectionDeleteClicked}
            >
              Delete Collection
            </Button>
          </div>
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
  )
}

export default CollectionDetail
