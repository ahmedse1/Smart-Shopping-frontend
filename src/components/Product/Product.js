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

const Product = ({
  t,
  product,
  index,
  deleteQuestion,
  activeCategoryId,
  approveManager,
  getUsers,
  getQuestions,
  deleteProduct,
  getProducts,
  increaseQuantity,
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
          <img
            style={{ marginRight: 20 }}
            src={product.image}
            width="150px"
            height="150px"
          />
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
                id: {product._id}
              </div>
            </div>
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
                }}
              >
                Name: {product.name}
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
                  Detail: {product.detail}
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
                  Price: {product.price}
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
                  Quantity: {product.quantity}
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
                  Size: {product.size}
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
                  Color: {product.color}
                </div>
                <div style={{ width: "100%" }}>
                  <div>
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
                            increaseQuantity(product._id).then((res) => {
                              getProducts(localStorage.getItem("id"));
                            });
                          }}
                          customStyle={{
                            backgroundColor: Colors.FOCUSED,
                            width: 140,
                            borderRadius: 12,
                            color: Colors.TEXT_PRIMARY,
                            textAlign: "center",
                          }}
                          text="Increase Quantity"
                        />
                      </div>
                      <div>
                        <Button
                          onClick={() => {
                            deleteProduct(product._id).then((res) => {
                              getProducts(localStorage.getItem("id"));
                            });
                          }}
                          customStyle={{
                            backgroundColor: Colors.RED_ACCENT,
                            width: 140,

                            borderRadius: 12,
                            color: Colors.TEXT_PRIMARY,
                            textAlign: "center",
                          }}
                          text="Delete"
                        />
                      </div>
                    </div>
                  </div>
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

export default Product;
