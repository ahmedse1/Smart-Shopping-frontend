import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const AddCategory = ({
  openDialog,
  organizationName,
  setOpen,
  loading,
  updatePassword,
  ...props
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {});

  const handleCloseDialogs = () => {
    const id = localStorage.getItem("id");
    if (password === confirmPassword) {
      updatePassword({ password, confirmPassword, id }).then((res) => {
        setPassword("");
        setConfirmPassword("");
        setOpen(false);
      });
    } else {
      alert("New Password and Confirm password are not same");
    }
  };
  return (
    <Dialog
      open={openDialog}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          borderRadius: 22,
          backgroundColor: Colors.TERTIARY,
        },
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent
        style={{
          backgroundColor: Colors.TERTIARY,
          width: 400,
          display: "flex",
          flexDirection: "column",
          // borderRadius: 22,
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 35,
          }}
        >
          <span style={{ fontSize: 14, color: Colors.TEXT_TERTIARY }}>
            Change Password
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 70,
            minWidth: "15vw",
            fontSize: "10px",
            color: Colors.TEXT_TERTIARY,
            marginBottom: 13,
          }}
        >
          <TextField
            margin="dense"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: {
                color: Colors.TEXT_PRIMARY,
                fontSize: 12,
              },
            }}
            label="New Password"
            variant="outlined"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 70,
            minWidth: "15vw",
            fontSize: "10px",
            color: Colors.TEXT_TERTIARY,
            marginBottom: 13,
          }}
        >
          <TextField
            margin="dense"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            InputLabelProps={{
              style: {
                color: Colors.TEXT_PRIMARY,
                fontSize: 12,
              },
            }}
            label="Confirm Password"
            variant="outlined"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => {
              setOpen(false);
            }}
            customStyle={{
              backgroundColor: Colors.PRIMARY,
              minWidth: 140,
              borderRadius: 12,
              color: Colors.TEXT_TERTIARY,

              textAlign: "center",
            }}
            text="Cancel"
          />

          <Button
            onClick={handleCloseDialogs}
            customStyle={{
              backgroundColor: Colors.FOCUSED,
              minWidth: 140,

              borderRadius: 12,
              color: Colors.TEXT_PRIMARY,
              textAlign: "center",
            }}
            text="Update"
          />
        </div>
        <div
          style={{
            height: 10,
            paddingTop: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading && <CircularProgress size={20} color="secondary" />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
