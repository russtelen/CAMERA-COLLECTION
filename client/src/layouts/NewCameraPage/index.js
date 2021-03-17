import React from "react"
import NewCameraForm from "../../components/NewCameraForm"
import { useParams } from "react-router-dom"

const NewCameraPage = () => {
  const { collectionId } = useParams()

  return <NewCameraForm collectionId={collectionId} />
}

export default NewCameraPage
