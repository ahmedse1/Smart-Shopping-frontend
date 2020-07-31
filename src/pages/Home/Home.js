import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import UserSidebar from "../../components/UserSidebar";
import Button from "../../components/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Home = ({
  history,
  getUser,
  userData,
  category,
  getQuestions,
  ...props
}) => {
  console.log(userData, "userData");
  useEffect(() => {
    getUser();
    // alert("hi");
  }, [userData === null]);
  return (
    <div>
      <UserSidebar history={history} />
    </div>
  );
};

export default Home;
