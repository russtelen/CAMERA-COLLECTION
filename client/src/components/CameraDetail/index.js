import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    height: "80vh",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    width: "100%",
    maxHeight: 900,
  },
}))

const CameraDetail = ({ camera }) => {
  const [modalStyle] = useState(getModalStyle)

  const classes = useStyles()

  return (
    <div style={modalStyle} className={classes.paper}>
      {!camera ? (
        "Loading..."
      ) : (
        <>
          <div className="d-flex justify-content-between">
            <h2>{camera.title}</h2>
            <h2>Year: {camera.year}</h2>
          </div>

          <div className="my-4">
            <div className="row">
              <div className="col-sm-12 col-md-7 ">
                <img src={camera.imageUrl} className={classes.image} />
              </div>
              <div className="col-sm-12 col-md-5">
                <h3>Description</h3>
                <p
                  style={{
                    maxHeight: 250,
                    overflow: "auto",
                    whiteSpace: "pre-line",
                  }}
                >
                  {camera.description}
                </p>
                <h3>Film Type</h3>
                <p>{camera.filmType} film</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CameraDetail
