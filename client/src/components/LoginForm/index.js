import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const LoginForm = ({ submit }) => {
  const classes = useStyles();

  return (
    <div className="container d-flex justify-content-center">
      <div style={{ width: "30vw" }}>
        <h1 className="text-center">Login</h1>
        <div className="my-5">
          <form>
            <div>
              <div className="row">
                <div className="col-12 my-2">
                  <TextField
                    id="standard-basic"
                    label="Username"
                    fullWidth
                    color="secondary"
                    margin="dense"
                    required
                    variant="filled"
                    value={""}
                  />
                </div>
                <div className="col-12 my-2">
                  <TextField
                    id="standard-basic"
                    label="Password"
                    fullWidth
                    color="secondary"
                    margin="dense"
                    required
                    variant="filled"
                    value={""}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center my-2">
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    endIcon={<LockOpenIcon />}
                    fullWidth
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
