import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const EditCollectionForm = ({ edit, collection }) => {
  const [title, setTitle] = useState("")

  useEffect(() => {
    setTitle(collection.title)
  }, [collection])

  const handleSubmit = (e) => {
    e.preventDefault()
    edit({ title })
    setTitle("")
  }

  return (
    <div className="container d-flex justify-content-center">
      <div style={{ width: "30vw" }}>
        <h1 className="text-center">Edit {title}</h1>
        <Link to={`/collections/${collection._id}`}>
          <ArrowBackIcon />
          Cancel
        </Link>
        <div className="my-5">
          <form>
            <div>
              <div className="row">
                <div className="col-12 my-2">
                  <TextField
                    type="text"
                    id="standard-basic"
                    label="Collection Name"
                    fullWidth
                    color="secondary"
                    margin="dense"
                    required
                    variant="filled"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center my-2">
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    endIcon={<AddToPhotosIcon />}
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditCollectionForm
