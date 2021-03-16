import React from "react";
import LoginForm from "../../components/LoginForm";
import useLocalStorage from "react-use-localstorage";
import axios from "axios";

const LoginPage = () => {
  const [token, setToken] = useLocalStorage("token");

  const submit = async (data) => {
    try {
      const res = await axios({
        method: "post",
        url: "/api/users/login",
        data: data,
      });

      const accessToken = res.data.accessToken;

      setToken(accessToken);
    } catch (e) {
      console.log(e);
      console.log("Incorrect username or password");
    }
  };

  return <LoginForm submit={submit} />;
};

export default LoginPage;
