import React from "react";
import LoginForm from "../../components/LoginForm";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";
import { loginUser } from "../../network";

const LoginPage = () => {
  const [token, setToken] = useLocalStorage("token");

  const submit = async (data) => {
    try {
      const accessToken = await loginUser(data);
      setToken(accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginForm submit={submit} />;
};

export default LoginPage;
