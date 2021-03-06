import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const CameraItem = ({
  camera,
  cameraCardClicked,
  cameraEditClicked,
  cameraDeleteClicked,
}) => {
  const classes = useStyles()

  const setCamera = () => {
    cameraCardClicked(camera)
  }

  const setCameraOnDelete = () => {
    cameraDeleteClicked(camera)
  }

  const setCameraOnEdit = () => {
    cameraEditClicked(camera)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => setCamera()}>
        <CardMedia
          component="img"
          alt={camera.title}
          height="300"
          image={camera.imageUrl}
          title={camera.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {camera.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setCameraOnEdit()}>
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => setCameraOnDelete()}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default CameraItem
