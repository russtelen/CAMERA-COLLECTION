import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto"
import MenuItem from "@material-ui/core/MenuItem"

const EditCameraForm = ({ collectionId, edit, camera, cameraId }) => {
  const [title, setTitle] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [year, setYear] = useState("")
  const [filmType, setFilmType] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    edit({ title, imageUrl, year, filmType, description })
  }

  useEffect(() => {
    setTitle(camera?.camera.title)
    setImageUrl(camera?.camera.imageUrl)
    setYear(camera?.camera.year)
    setFilmType(camera?.camera.filmType)
    setDescription(camera?.camera.description)
  }, [camera, cameraId])

  return (
    <div>
      <h1 className="text-center">Edit {title}</h1>
      <Link to={`/collections/${collectionId}`}>
        <ArrowBackIcon /> Back to collection
      </Link>
      <div className="my-5">
        <form>
          <div className="container">
            <div className="row">
              <div className="col-12 my-2">
                <TextField
                  type="text"
                  id="standard-basic"
                  label="Camera Name"
                  fullWidth
                  color="secondary"
                  margin="dense"
                  required
                  variant="filled"
                  value={title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-12 my-2">
                <TextField
                  type="url"
                  id="standard-basic"
                  label="Image URL"
                  fullWidth
                  color="secondary"
                  margin="dense"
                  required
                  variant="filled"
                  value={imageUrl || ""}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div className="col-12 my-2">
                <TextField
                  type="number"
                  id="standard-basic"
                  label="Year Made"
                  fullWidth
                  color="secondary"
                  margin="dense"
                  required
                  variant="filled"
                  value={year || ""}
                  onChange={(e) => setYear(e.target.value)}
                  inputProps={{ min: 0 }}
                />
              </div>
              <div className="col-12 my-2">
                <TextField
                  type="text"
                  id="standard-basic"
                  label="Film Type"
                  fullWidth
                  color="secondary"
                  margin="dense"
                  required
                  variant="filled"
                  value={filmType || ""}
                  onChange={(e) => setFilmType(e.target.value)}
                  select
                >
                  <MenuItem value={"120"}>120</MenuItem>
                  <MenuItem value={"35mm"}>35mm</MenuItem>
                  <MenuItem value={"Digital"}>Digital</MenuItem>
                  <MenuItem value={"Polaroid"}>Polaroid</MenuItem>
                </TextField>
              </div>
              <div className="col-12 my-2">
                <TextField
                  type="text"
                  id="standard-basic"
                  label="Description"
                  fullWidth
                  color="secondary"
                  margin="dense"
                  required
                  variant="filled"
                  value={description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={6}
                />
              </div>
              <div className="col-12 d-flex justify-content-center my-2">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  endIcon={<AddAPhotoIcon />}
                  fullWidth
                  onClick={handleSubmit}
                >
                  Edit Camera
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCameraForm
