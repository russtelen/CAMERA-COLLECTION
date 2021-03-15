import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem";
import { getAllCollections } from "../../network";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const data = await getAllCollections();
      setCollections(data);
    })();
  }, []);

  const cardClicked = (id) => {
    history.push(`/collections/${id}`);
  };

  return (
    <div>
      <h1 className="text-center">Collections</h1>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {!collections
            ? "Loading ...."
            : collections.map((collection) => (
                <div className="col-sm-12 col-md-4 mb-4">
                  <CollectionItem
                    key={collection._id}
                    collection={{ ...collection }}
                    cardClicked={() => cardClicked(collection._id)}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
