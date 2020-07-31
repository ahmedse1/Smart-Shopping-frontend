import React, { Component, useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "../Button";
import Popover from "@material-ui/core/Popover";
import AddCategory from "../AddCategory";

import { makeStyles } from "@material-ui/core/styles";
import * as Colors from "../../styles/colors";

const useStyles = makeStyles({
  select: {
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
    // marginBottom: 15,
    border: "none",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 6,
  },
  formControl: {
    // minWidth: 120
  },
  paper: {
    backgroundColor: Colors.SECONDARY,
    color: "red",
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
});

const DrawerCustomUser = ({
  adminData,
  userData,
  setMobileOpen,
  mobileOpen,
  history,
  activePageName,
  setActivePageName,
  getCategories,
  categories,
  deleteCategory,
  ...props
}) => {
  const [organization, setOrganization] = useState();

  useEffect(() => {
    // getCategories().then((res) => {
    //   if (res.value.data.length > 0) {
    //     setActiveCategoryId(res.value.data[0]._id);
    //   }
    // });
  }, [categories.length < 0]);

  // const [activeBookId, setActiveBookId] = useState(
  //   !getBooks.loading &&
  //     getBooks.getBooks &&
  //     getBooks.getBooks.length >= 1 &&
  //     getBooks.getBooks[0].id
  // );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openDialog, setOpen] = React.useState(false);
  const [openEditCategoryDialog, setOpenEditCategoryDialog] = React.useState(
    false
  );

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: Colors.PRIMARY,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            backgroundColor: Colors.SECONDARY,
            height: "100vh",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: Colors.SECONDARY,
          }}
        >
          <div
            style={{
              // border: '1px solid red',
              height: "17vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <img
                src={require("../../Image/profile.png")}
                width="auto"
                height="53"
                // style={{ marginRight: '12px' }}
                alt="Logo"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                color: Colors.TEXT_TERTIARY,
                fontSize: 14,
                minWidth: "140px",
              }}
            >
              <span
                style={{
                  fontSize: 17,
                  color: Colors.TEXT_PRIMARY,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {userData && userData.name}
              </span>
            </div>
          </div>

          <div
            style={{
              height: "60vh",
              // marginTop: 15,
            }}
          >
            <div
              style={{
                height: "80vh",
                overflow: "auto",
              }}
            >
              <List>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",
                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Dashboard"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Dashboard");
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Shop"}
                    />
                  </ListItem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",
                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Inventory Manager"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Inventory Manager");
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Inventory Manager"}
                    />
                  </ListItem>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",
                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Categories"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Categories");
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Categories"}
                    />
                  </ListItem>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",

                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Products"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Products");

                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Products"}
                    />
                  </ListItem>
                </div> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",

                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Orders"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Orders");

                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Orders"}
                    />
                  </ListItem>
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",

                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Customers"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Customers");

                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Customers"}
                    />
                  </ListItem>
                </div> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",

                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Delivery Men"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Delivery Men");

                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Delivery Manager"}
                    />
                  </ListItem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      marginBottom: "15px",

                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor:
                        activePageName === "Payments"
                          ? Colors.FOCUSED
                          : Colors.PRIMARY,
                    }}
                    onClick={() => {
                      setActivePageName("Payments");

                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText
                      style={{ textAlign: "center" }}
                      primary={"Accounts Manager"}
                    />
                  </ListItem>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerCustomUser;
