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
  DialogTitle
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  MenuItem,
  Box,
  FormControl,
  Fab,
  InputLabel
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    underline: {
      "&&&:before": {
        borderBottom: "none"
      },
      "&&:after": {
        borderBottom: "none"
      }
    },
    // marginBottom: 15,
    border: "none",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 6
  },
  // selectMenu: {
  //   underline: {
  //     '&&&:before': {
  //       borderBottom: 'none'
  //     },
  //     '&&:after': {
  //       borderBottom: 'none'
  //     }
  //   },
  //   marginBottom: 15,
  //   borderBottom: 'none',
  //   backgroundColor: 'red'
  // },
  formControl: {
    minWidth: 120
  },
  paper: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.TEXT_TERTIARY
  }
});
const UsersDropdown = ({ usersArray, getUsers, setUserId, ...props }) => {
  // const handleClickOpenDialogs = () => {
  //   setOpen(true);
  // };
  const classes = useStyles();
  useEffect(() => {
    getUsers();
  }, [usersArray === null]);

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-filled-label"
          style={{ color: Colors.TEXT_TERTIARY }}
        >
          Select User
        </InputLabel>
        <Select
          label="To"
          labelId="demo-simple-select-filled-label"
          variant="filled"
          // style={{
          //   classes,
          //   // height: 67,
          //   backgroundColor: Colors.SECONDARY,
          //   color: 'red',
          //   borderRadius: 6,
          //   // border: '0px',
          //   marginBottom: 15
          // }}
          MenuProps={{ classes }}
          // value={member}
          onChange={e => setUserId(e.target.value)}
          SelectDisplayProps={{
            classes: classes.select,
            style: {
              color: Colors.TEXT_SECONDARY,
              minWidth: "23vw",
              fontSize: 18
            }
          }}
          classes={classes}
          // onChange={handleChange}
        >
          {usersArray &&
            usersArray.map((e, i) => (
              <MenuItem value={e._id} key={i}>
                {e.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default UsersDropdown;
