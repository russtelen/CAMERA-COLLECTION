import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import LockOpenIcon from "@material-ui/icons/LockOpen"

const LoginForm = ({ submit }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const submitLoginForm = (e) => {
    e.preventDefault()
    submit({ username, password })
    setUsername("")
    setPassword("")
  }
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
                    type="text"
                    id="standard-basic"
                    label="Username"
                    fullWidth
                    color="secondary"
                    margin="dense"
                    required
                    variant="filled"
                    value={username || ""}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-12 my-2">
                  <TextField
                    type="password"
                    id="standard-basic"
                    label="Password"
                    fullWidth
                    color="secondary"
                    margin="dense"
                    required
                    variant="filled"
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-12 d-flex justify-content-center my-2">
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    endIcon={<LockOpenIcon />}
                    fullWidth
                    onClick={(e) => submitLoginForm(e)}
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
  )
}

export default LoginForm
