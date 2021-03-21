import React, { useState, useEffect } from "react"
import EditCameraForm from "../../components/EditCameraForm"
import { useParams } from "react-router-dom"
import axios from "axios"

const EditCameraFormPage = () => {
  const { collectionId, cameraId } = useParams()
  const [camera, setCamera] = useState(null)

  const getCameraById = async (cameraId) => {
    const res = await axios.get(`/api/cameras/${cameraId}`)
    return res.data
  }

  useEffect(() => {
    ;(async () => {
      const res = await getCameraById(cameraId)

      setCamera(res)
    })()
  }, [cameraId])

  useEffect(() => {
    // console.log(camera)
  }, [camera])

  const submit = (data) => {
    console.log(data)
  }

  return (
    <EditCameraForm
      collectionId={collectionId}
      cameraId={cameraId}
      submit={submit}
      camera={camera}
    />
  )
}

export default EditCameraFormPage
