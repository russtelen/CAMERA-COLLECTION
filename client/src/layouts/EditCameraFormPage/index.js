import React, { useState, useEffect } from "react"
import EditCameraForm from "../../components/EditCameraForm"
import { useParams, useHistory } from "react-router-dom"
import toastr from "toastr"
import { editCamera, getCameraById } from "../../network"

const EditCameraFormPage = () => {
  const { collectionId, cameraId } = useParams()
  const [camera, setCamera] = useState(null)
  const token = localStorage.getItem("token")

  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      const res = await getCameraById(cameraId)

      setCamera(res)
    })()
  }, [cameraId])

  useEffect(() => {}, [camera])

  const edit = async (data) => {
    const res = await editCamera(data, cameraId, token)
    if (res) {
      toastr["success"](res.message)
      history.push(`/collections/${collectionId}`)
      return
    }

    toastr["error"]("Oops somethings went wrong")
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <EditCameraForm
        collectionId={collectionId}
        cameraId={cameraId}
        edit={edit}
        camera={camera}
      />
    </div>
  )
}

export default EditCameraFormPage
