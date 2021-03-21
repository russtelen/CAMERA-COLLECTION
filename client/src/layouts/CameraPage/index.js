import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getAllCameras } from "../../network"
import CameraItem from "../../components/CameraItem"
import CameraDetail from "../../components/CameraDetail"
import Modal from "@material-ui/core/Modal"

const CameraPage = () => {
  const [cameras, setCameras] = useState([])
  const [camera, setCamera] = useState(null)
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const { userId } = useParams()

  useEffect(() => {
    ;(async () => {
      const res = await getAllCameras()
      const camerasByUser = res.filter((r) => r.user._id === userId)
      setCameras(camerasByUser)
    })()
  }, [])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const cameraCardClicked = (camera) => {
    setCamera(camera)
    handleOpen()
  }

  const cameraEditClicked = (camera) => {
    history.push(
      `/collections/${camera._collection._id}/editCamera/${camera._id}`
    )
  }

  const cameraDeleteClicked = () => {
    alert("camera delete clicked")
  }

  return (
    <div className="container">
      <h1 className="text-center">All Cameras</h1>
      {cameras.length > 0 ? (
        <div>
          <div className="row">
            {cameras.map((camera) => (
              <div className="col-12 col-md-4 my-3">
                <CameraItem
                  camera={camera}
                  cameraCardClicked={cameraCardClicked}
                  cameraEditClicked={cameraEditClicked}
                  cameraDeleteClicked={cameraDeleteClicked}
                />
              </div>
            ))}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <CameraDetail camera={camera} />
          </Modal>
        </div>
      ) : (
        <h2 className="text-muted text-center m-5">No Cameras Yet</h2>
      )}
    </div>
  )
}

export default CameraPage
