import React from "react"
import NewCameraForm from "../../components/NewCameraForm"
import { useParams } from "react-router-dom"

const NewCameraPage = () => {
  const { collectionId } = useParams()

  const submit = (data) => {
    console.log(data)
  }
  return <NewCameraForm collectionId={collectionId} submit={submit} />
}

export default NewCameraPage
