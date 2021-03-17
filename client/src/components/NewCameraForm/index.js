import React from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const NewCameraForm = ({ collectionId }) => {
  return (
    <div>
      <h1 className="text-center">Add New Camera</h1>
      <Link to={`/collections/${collectionId}`}>
        <ArrowBackIcon /> Back to collection
      </Link>
    </div>
  )
}

export default NewCameraForm
