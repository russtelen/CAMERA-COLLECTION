import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"

const NewCollectionForm = ({ submit }) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    submit({ title })
    setTitle("")
  }
  return (
    <div className="container d-flex justify-content-center">
      <div style={{ width: "30vw" }}>
        <h1 className="text-center">Add New Collection</h1>
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
                    Add New Collection
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

export default NewCollectionForm
