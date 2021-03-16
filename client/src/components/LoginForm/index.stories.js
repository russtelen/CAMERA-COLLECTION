import React from "react";
import { actions } from "@storybook/addon-actions";

import LoginForm from "./index";

export default {
  title: "LoginForm",
  component: LoginForm,
};

const events = actions({
  submit: "submit clicked",
});

export const Default = () => <LoginForm {...events} />;
