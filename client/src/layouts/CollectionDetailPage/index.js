import React, { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import CameraDetail from "../../components/CameraDetail"
import Modal from "@material-ui/core/Modal"
import { useParams, useHistory } from "react-router-dom"
import { getCollectionById, deleteCollectionById } from "../../network"
import CollectionDetail from "../../components/CollectionDetail"
import toastr from "toastr"

const CollectionDetailPage = () => {
  const [collection, setCollection] = useState(null)
  const { user } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const [camera, setCamera] = useState(null)
  // Get the token from local storage
  const token = localStorage.getItem("token")

  const history = useHistory()

  const { collectionId } = useParams()

  useEffect(() => {
    ;(async () => {
      const data = await getCollectionById(collectionId)

      let userData

      if (data.user.username == user?.username) {
        userData = data
      }

      if (userData) {
        setCollection(userData)
      }
    })()
  }, [collectionId])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const collectionEditClicked = () => {
    alert("show edit form")
  }

  const collectionDeleteClicked = async () => {
    const res = await deleteCollectionById(collectionId, token)
    if (res) {
      history.push("/collections")
      toastr["success"](res.message)
      return
    }

    toastr["error"]("Error deleting collection")
  }

  const newCameraClicked = () => {
    history.push(`/collections/${collectionId}/addNewCamera`)
  }

  const cameraCardClicked = (data) => {
    setCamera(data)
    handleOpen()
  }

  const cameraEditClicked = () => {
    alert("edit clicked")
  }

  const cameraDeleteClicked = () => {
    alert("delete clicked")
  }

  return (
    <div>
      <CollectionDetail
        open={open}
        handleClose={handleClose}
        collection={collection}
        cameraCardClicked={cameraCardClicked}
        cameraEditClicked={cameraEditClicked}
        cameraDeleteClicked={cameraDeleteClicked}
        collectionEditClicked={collectionEditClicked}
        collectionDeleteClicked={collectionDeleteClicked}
        newCameraClicked={newCameraClicked}
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
  )
}

export default CollectionDetailPage
