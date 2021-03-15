import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CollectionItem = ({ collection, cardClicked }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => cardClicked()}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            collection.cameras[0]
              ? collection.cameras[0].imageUrl
              : "https://i.stack.imgur.com/y9DpT.jpg"
          }
          title={collection.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {collection.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CollectionItem;
