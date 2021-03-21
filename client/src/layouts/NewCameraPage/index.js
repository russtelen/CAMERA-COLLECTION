import React from "react"
import NewCameraForm from "../../components/NewCameraForm"
import { useParams, useHistory } from "react-router-dom"
import { addNewCamera } from "../../network"
import toastr from "toastr"

const NewCameraPage = () => {
  const history = useHistory()

  // Get the token from local storage
  const token = localStorage.getItem("token")

  const { collectionId } = useParams()

  const submit = async (data) => {
    const res = await addNewCamera(data, collectionId, token)
    if (res) {
      toastr["success"](res.message)
      history.push(`/collections/${collectionId}`)
      return
    }

    toastr["error"]("Error adding new camera to collection")
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <NewCameraForm collectionId={collectionId} submit={submit} />
    </div>
  )
}

export default NewCameraPage
