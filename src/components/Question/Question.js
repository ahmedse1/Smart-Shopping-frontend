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

const Question = ({
  t,
  question,
  user,
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
    console.log(user, "user");
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
                Name: {user.name}
              </div>
            </div>

            <div style={{ transition: "all 0.5s ease" }}>
              <div
                style={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    color: Colors.TEXT_SECONDARY,
                    textAlign: "left",
                    // maxWidth: '60%',
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 6,
                  }}
                >
                  Email: {user.email}
                </div>
                <div
                  style={{
                    color: Colors.TEXT_SECONDARY,
                    textAlign: "left",
                    // maxWidth: '60%',
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 6,
                  }}
                >
                  Shop Name: {user.shopName}
                </div>
                <div
                  style={{
                    color: Colors.TEXT_SECONDARY,
                    textAlign: "left",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 6,
                  }}
                >
                  Shop Category: {user.shopCategory}
                </div>
                <div style={{ width: "100%" }}>
                  {user.status === "approved" ? (
                    <div
                      style={{
                        color: Colors.FOCUSED,
                        display: "flex",
                        justifyContent: "flex-end",
                        // alignSelf: "flex-end",aaa
                        flexDirection: "row",
                        marginTop: 10,
                        // width: '20vw',
                        // border: '1px solid red'
                      }}
                    >
                      <div>
                        <Button
                          // onClick={handleCloseDialogs}
                          customStyle={{
                            backgroundColor: Colors.FOCUSED,
                            width: 140,
                            borderRadius: 12,
                            color: Colors.TEXT_PRIMARY,
                            textAlign: "center",
                          }}
                          text={"Approved"}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      {user.status === "rejected" ? (
                        <div
                          style={{
                            color: Colors.FOCUSED,
                            display: "flex",
                            justifyContent: "flex-end",
                            // alignSelf: "flex-end",aaa
                            flexDirection: "row",
                            marginTop: 10,
                            // width: '20vw',
                            // border: '1px solid red'
                          }}
                        >
                          <div>
                            <Button
                              // onClick={handleCloseDialogs}
                              customStyle={{
                                backgroundColor: Colors.RED_ACCENT,
                                width: 140,
                                borderRadius: 12,
                                color: Colors.TEXT_PRIMARY,
                                textAlign: "center",
                              }}
                              text={"Rejected"}
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            color: Colors.FOCUSED,
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            alignSelf: "flex-end",
                            // flexDirection: 'row',
                            marginTop: 10,
                            // width: '25vw',
                          }}
                        >
                          <div style={{ width: "11vw" }}>
                            <Button
                              onClick={() => {
                                approveManager({
                                  id: user._id,
                                  status: "rejected",
                                }).then((res) => {
                                  getUsers();
                                });
                              }}
                              customStyle={{
                                backgroundColor: Colors.RED_ACCENT,
                                width: 140,
                                borderRadius: 12,
                                color: Colors.TEXT_PRIMARY,
                                textAlign: "center",
                              }}
                              text="Reject"
                            />
                          </div>
                          <div>
                            <Button
                              onClick={() => {
                                approveManager({
                                  id: user._id,
                                  status: "approved",
                                }).then((res) => {
                                  getUsers();
                                });
                              }}
                              customStyle={{
                                backgroundColor: Colors.FOCUSED,
                                width: 140,

                                borderRadius: 12,
                                color: Colors.TEXT_PRIMARY,
                                textAlign: "center",
                              }}
                              text="Approve"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <div
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <img src={require("../../Image/menu.png")} height="14" alt="Logo" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Question;
