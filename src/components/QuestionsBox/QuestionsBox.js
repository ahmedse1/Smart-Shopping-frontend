import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import * as Colors from "../../styles/colors";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import moment from "moment";
import AddIcon from "@material-ui/icons/Add";
import Question from "../Question";

const QuestionsBox = ({
  activeCategoryId,
  getUsers,
  usersArray,
  loading,
  ...props
}) => {
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res, "resssss");
    });
  }, []);

  return (
    <div className="questionsBox">
      <div style={{ paddingTop: 20 }}>
        {usersArray && usersArray.length > 0 ? (
          usersArray.map((user, index) => {
            return (
              <div>
                <Question user={user} index={index + 1} />
              </div>
            );
          })
        ) : (
          <div>{!loading && "No Question in this category"}</div>
        )}
      </div>
      <div style={{ height: 30, paddingTop: 20 }}>
        {loading && <CircularProgress color="secondary" />}
      </div>
    </div>
  );
};

export default QuestionsBox;
