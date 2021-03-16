import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";
import { loginUser } from "../../network";
import { UserContext } from "../../context/UserContext";
import toastr from "toastr";

const LoginPage = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const [token, setToken] = useLocalStorage("token");

  const submit = async (data) => {
    try {
      const accessToken = await loginUser(data);
      if (accessToken) {
        setToken(accessToken);
        setTimeout(() => {
          history.push("/collections");
          toastr["success"](
            `Welcome to your Camera Collection`,
            "Login Success"
          );
        }, 500);
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const decodedUser = token ? jwtDecode(token) : null;
    setUser(decodedUser);
  }, [token]);

  return <LoginForm submit={submit} />;
};

export default LoginPage;
