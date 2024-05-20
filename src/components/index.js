import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
// const Home = React.lazy(() => import("./Home"));

// Authentication
const LogIn = React.lazy(() => import("./Authentication/LogIn"));
const AddFunds = React.lazy(() => import("./Authentication/AddFunds"));
const Home = React.lazy(() => import("./Authentication"));
const CreateAccount = React.lazy(() =>
  import("./Authentication/CreateAccount")
);
const ForgetPassword = React.lazy(() =>
  import("./Authentication/ForgetPassword")
);

// User
const Dashboard = React.lazy(() => import("./User/Dashboard"));

const WEB_PAGES = {
  NO_PAGE: NoPage,
  // HOME: Home,

  // AUTHENTICATION
  HOME: Home,
  LOGIN_IN: LogIn,
  ADD_FUNDS: AddFunds,
  CREATE_ACCOUNT: CreateAccount,
  FORGET_PASSWORD: ForgetPassword,

  // USER
  DASHBOARD: Dashboard,
};

export default WEB_PAGES;
