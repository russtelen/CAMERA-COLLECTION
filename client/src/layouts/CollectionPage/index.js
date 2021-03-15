import React, { useState, useEffect } from "react";
import CollectionItem from "../../components/CollectionItem";
import { getAllCollections } from "../../network";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCollections();
      setCollections(data);
    })();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {!collections
          ? "Loading ...."
          : collections.map((collection) => (
              <div className="col-sm-12 col-md-4 mb-4">
                <CollectionItem
                  key={collection._id}
                  collection={{ ...collection }}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default CollectionPage;
