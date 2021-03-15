import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    height: "80vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CameraDetail = ({ camera }) => {
  const [modalStyle] = useState(getModalStyle);

  const classes = useStyles();

  return (
    <div style={modalStyle} className={classes.paper}>
      {camera ? <h2 id="simple-modal-title">{camera.title}</h2> : null}

      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );
};

export default CameraDetail;
