import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem";
import { getAllCollections } from "../../network";
import CircularProgress from "@material-ui/core/CircularProgress";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const data = await getAllCollections();
      const userData = data.filter((d) => d.user.username == user?.username);
      if (userData) {
        setCollections(userData);
      }
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
          {collections.length == 0 ? (
            <h3 className="text-muted">No collections yet! Add one now!</h3>
          ) : (
            collections.map((collection) => (
              <div key={collection._id} className="col-sm-12 col-md-4 mb-4">
                <CollectionItem
                  collection={{ ...collection }}
                  cardClicked={() => cardClicked(collection._id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
