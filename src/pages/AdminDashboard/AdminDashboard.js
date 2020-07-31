import React, { useState, useEffect } from "react";

import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SideBar from "../../components/SideBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const AdminDashboard = ({ history, getAdmin, adminData, ...props }) => {
  useEffect(() => {
    getAdmin();
  }, [adminData === null]);
  return (
    <div>
      <SideBar history={history} />
    </div>
  );
};

export default AdminDashboard;
