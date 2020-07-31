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

const DrawerCustom = ({
  adminData,
  userData,
  setMobileOpen,
  mobileOpen,
  history,
  activeCategoryId,
  setActiveCategoryId,
  getCategories,
  categories,
  deleteCategory,
  ...props
}) => {
  const [organization, setOrganization] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      if (res.value.data.length > 0) {
        setActiveCategoryId(res.value.data[0]._id);
      }
    });
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
      {/* ////////////////////////////////////// Popover Code Start////////////////////////////////// */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          style: { borderRadius: 8, backgroundColor: Colors.TERTIARY },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",

          horizontal: "right",
        }}
      >
        <div
          style={{
            backgroundColor: Colors.TERTIARY,
            // borderRadius: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={(event) => {
              // setMemberId(member.id);
              setOpenEditCategoryDialog(!openEditCategoryDialog);
              setAnchorEl(null);
            }}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              color: Colors.TEXT_TERTIARY,
              textAlign: "left",
            }}
            text={"Edit Category"}
          />
          <Button
            onClick={() => {
              deleteCategory(activeCategoryId)
                .then((res) => {
                  getCategories().then((res) => {
                    setActiveCategoryId(res.value.data[0]._id);
                    setAnchorEl(null);
                  });
                })
                .catch((err) => alert("Cannot delete Category"));
            }}
            customStyle={{
              backgroundColor: Colors.TERTIARY,
              color: Colors.TEXT_TERTIARY,
              textAlign: "left",
            }}
            text={"Delete Category"}
          />
        </div>
      </Popover>
      {/* ////////////////////////////////////// Popover Code End //////////////////////////// */}

      <AddCategory
        organizationName={organization && organization.organizationName}
        openDialog={openDialog}
        setOpen={setOpen}
      />
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
                {adminData ? "Admin" : "No Org"}
              </span>

              {userData && userData.firstName + " " + userData.lastName}
            </div>
          </div>

          <div style={{ height: "60vh", marginTop: 15 }}>
            <div
              style={{
                height: "50vh",
                overflow: "auto",
              }}
            >
              <List>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItem
                    // button
                    style={{
                      width: "85%",
                      marginLeft: "12px",
                      height: "50%",
                      color: Colors.TEXT_PRIMARY,
                      borderRadius: "10px",
                      backgroundColor: Colors.FOCUSED,
                    }}
                    onClick={() => {
                      // setActiveCategoryId(category._id);
                      // setMobileOpen(false);
                    }}
                  >
                    <ListItemText primary={"Managers"} />
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

export default DrawerCustom;
