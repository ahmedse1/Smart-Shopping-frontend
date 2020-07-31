import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  DialogTitle,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Button from "../Button";
import AddIcon from "@material-ui/icons/Add";
import * as Colors from "../../styles/colors";

const Category = ({
  t,
  question,
  category,
  index,
  deleteQuestion,
  activeCategoryId,
  approveManager,
  getUsers,
  getQuestions,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);
  const [editBoxOpen, setEditBoxOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const popoverOpen = Boolean(anchorEl);
  const open = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // console.log(user, "user");
  }, []);
  return (
    <div style={{ transition: "all 0.5s ease" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="transactionBox"
          style={{
            backgroundColor: Colors.SECONDARY,
            transition: "all 0.5s ease",
            // height: '70px',
            padding: "25px",
            marginTop: "7px",
            display: "flex",
            borderRadius: "11px",
            minWidth: "90%",
            marginBottom: "7px",
          }}
        >
          <span style={{ marginRight: 8 }}>{index + ":"}</span>
          <div
            style={{
              flexGrow: 1,
              // maxWidth: '20vw'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  color: Colors.TEXT_SECONDARY,
                  fontWeight: "bold",
                }}
              >
                {category.name}
              </div>
            </div>
          </div>
          <div>{/* <Button text="Delete Category" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
