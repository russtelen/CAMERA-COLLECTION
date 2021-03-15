import React, { useState, useEffect } from "react";
import CameraDetail from "../../components/CameraDetail";
import Modal from "@material-ui/core/Modal";
import { useParams } from "react-router-dom";
import { getCollectionById } from "../../network";
import CollectionDetail from "../../components/CollectionDetail";

const CollectionDetailPage = () => {
  const [collection, setCollection] = useState(null);
  const [open, setOpen] = useState(false);
  const [camera, setCamera] = useState(null);

  const { collectionId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCollectionById(collectionId);
      setCollection(data);
    })();
  }, [collectionId]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cameraCardClicked = (data) => {
    setCamera(data);
    handleOpen();
  };

  const cameraEditClicked = () => {
    alert("edit clicked");
  };

  const cameraDeleteClicked = () => {
    alert("delete clicked");
  };

  return (
    <div>
      <CollectionDetail
        open={open}
        handleClose={handleClose}
        collection={collection}
        cameraCardClicked={cameraCardClicked}
        cameraEditClicked={cameraEditClicked}
        cameraDeleteClicked={cameraDeleteClicked}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CameraDetail camera={camera} />
      </Modal>
    </div>
  );
};

export default CollectionDetailPage;
