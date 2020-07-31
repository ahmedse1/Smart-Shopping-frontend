/* eslint-disable object-curly-newline */
import React, { Component, useState, useEffect, useC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import AdminLogin from "./pages/AdminLogin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import InventoryLogin from "./pages/InventoryLogin"
import DeliveryLogin from "./pages/DeliveryLogin"
import AccountLogin from "./pages/AccountLogin"

import UserLogin from "./pages/Login"
import Front from "./pages/Front";


import AdminDashboard from "./pages/AdminDashboard";


import AuthRoute from "./auth/AuthRoute";
import AdminRoute from "./auth/AdminRoute";

import OpenRoute from "./auth/OpenRoute";

const history = createHistory();

const AppRouter = ({ userType, ...props }) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <AuthRoute path="/home" component={Home} history={history} exact />
        <OpenRoute path="/signup" component={Signup} exact />
        <OpenRoute path="/adminlogin" component={AdminLogin} exact />
        <OpenRoute path="/login" component={UserLogin} exact />
        <OpenRoute path="/InventoryLogin" component={InventoryLogin} exact />
        <OpenRoute path="/DeliveryLogin" component={DeliveryLogin} exact />
        <OpenRoute path="/AccountLogin" component={AccountLogin} exact />
        
        <OpenRoute path="/" component={Front} exact />

        <AdminRoute path="/admindashboard" component={AdminDashboard} exact />
       

        <Redirect from="/:anything" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ users, admins, common }) => ({
  userData: users.userData,
  adminData: admins.adminData,
  userType: common.userType,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
