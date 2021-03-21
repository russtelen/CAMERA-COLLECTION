import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getAllCameras } from "../../network"
import CameraItem from "../../components/CameraItem"

const CameraPage = () => {
  const [cameras, setCameras] = useState([])
  const { userId } = useParams()

  useEffect(() => {
    ;(async () => {
      const res = await getAllCameras()
      const camerasByUser = res.filter((r) => r.user._id === userId)
      setCameras(camerasByUser)
    })()
  }, [])
  return (
    <div className="container">
      <h1 className="text-center">All Cameras</h1>
      {cameras.length > 0 ? (
        <div className="row">
          {cameras.map((camera) => (
            <div className="col-12 col-md-4 my-3">
              <CameraItem camera={camera} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-muted text-center m-5">No Cameras Yet</h2>
      )}
    </div>
  )
}

export default CameraPage
