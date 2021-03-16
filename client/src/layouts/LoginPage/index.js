import React from "react";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  const submit = (data) => {
    console.log("User credentials:", data);
  };
  return <LoginForm submit={submit} />;
};

export default LoginPage;
