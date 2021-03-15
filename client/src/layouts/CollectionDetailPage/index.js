import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCollectionById } from "../../network";
import CollectionDetail from "../../components/CollectionDetail";

const CollectionDetailPage = () => {
  const [collection, setCollection] = useState(null);

  const { collectionId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getCollectionById(collectionId);
      setCollection(data);
    })();
  }, []);

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
