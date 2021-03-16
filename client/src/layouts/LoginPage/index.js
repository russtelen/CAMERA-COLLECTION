import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useLocalStorage from "react-use-localstorage";
import { loginUser } from "../../network";

const LoginPage = () => {
  const history = useHistory();
  const [token, setToken] = useLocalStorage("token");

  const submit = async (data) => {
    try {
      const accessToken = await loginUser(data);
      if (accessToken) {
        setToken(accessToken);
        history.push("/collections");
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginForm submit={submit} />;
};

export default LoginPage;
