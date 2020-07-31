import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Select } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddIcon from "@material-ui/icons/Add";
import Popover from "@material-ui/core/Popover";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import AccountCircle from "@material-ui/icons/AccountCircle";
import DrawerCustom from "../DrawerCustom";
import * as Colors from "../../styles/colors";
import BookDetail from "../BookDetail";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      height: "100vh"
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    // marginRight: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    cursor: "pointer"
  },
  content: {
    flexGrow: 1
    // padding: theme.spacing(3)
  }
}));

const SideBar = ({
  getBooks,
  mobileOpen,
  history,
  userData,
  setMobileOpen,
  setUserType,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addMemberBoxOpen, setAddMemberBoxOpen] = useState(false);
  const [organization, setOrganization] = useState();

  const open = Boolean(anchorEl);

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [activeCategoryId, setActiveCategoryId] = useState();

  return (
    <div className="sidebar">
      <div className="sidebar__root">
        {/* ////////////////////////////////////// Popover Code Start////////////////////////////////// */}
        <Popover
          id={id}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          PaperProps={{
            style: {
              borderRadius: 8,
              // height: '100px',
              cursor: "pointer",
              backgroundColor: Colors.TERTIARY,
              minWidth: "180px"
            }
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          <div className="sidebar__settings">
            {/* ///////////////////////////////////////////// Logout ////////////////////////////////// */}

            <div
              onClick={() => {
                localStorage.clear();
                setUserType("");
                history.push("/login");
              }}
              className="sidebar__settings--container--last"
            >
              <div className="sidebar__settings--button">Logout</div>
              <img
                src={require("../../Image/logout.png")}
                width="auto"
                height="15"
                // style={{ marginRight: '12px' }}
                alt="Logo"
              />
            </div>
          </div>

        </Popover>
        {/* ////////////////////////////////////// Popover Code End ////////////////////////////////// */}

        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={() => {
                setMobileOpen(false);
              }}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <DrawerCustom
                setMobileOpen={setMobileOpen}
                mobileOpen={mobileOpen}
                userData={userData}
                history={history}
                activeCategoryId={activeCategoryId}
                setActiveCategoryId={setActiveCategoryId}
              />
              {/* <List style={{ position: 'absolute', bottom: 0 }}>
                  <ListItem
                    button
                    onClick={() => {
                      alert('settings clicked');
                    }}>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary='Settings' />
                  </ListItem>
                </List> */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 16,
                    border: "1px solid red"
                  }}
                  // button
                  onClick={event => {
                    setAnchorEl(event.currentTarget);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={require("../../Image/settings.png")}
                      onClick={() => {
                        // setOpen(true);
                      }}
                      width="auto"
                      style={{ marginLeft: "12px" }}
                      height="18"
                      alt="Logo"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </div>
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <DrawerCustom
                setMobileOpen={setMobileOpen}
                mobileOpen={mobileOpen}
                userData={userData}
                history={history}
                activeCategoryId={activeCategoryId}
                setActiveCategoryId={setActiveCategoryId}
              />
              {/* <AddBook /> */}

              <div style={{ position: "absolute", bottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 16
                  }}
                  // button
                  onClick={event => {
                    localStorage.clear();
                    setUserType("");
                    history.push("/login");
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={require("../../Image/logout.png")}
                      width="auto"
                      style={{ marginLeft: "5px" }}
                      height="18"
                      alt="Logo"
                    />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: Colors.TEXT_PRIMARY }}
                    primary="Logout"
                  />
                </div>
              </div>
              {/* ////////////////////////////////// */}
              <div style={{ position: "absolute", bottom: 60 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 16
                  }}
                  // button
                  onClick={event => {
                    alert('Feature In Progress')
                  }}
                >
                  <ListItemIcon>
                    <img
                      src={require("../../Image/preferences.png")}
                      width="auto"
                      style={{ marginLeft: "5px" }}
                      height="18"
                      alt="Logo"
                    />
                  </ListItemIcon>
                  <ListItemText
                    style={{ color: Colors.TEXT_PRIMARY }}
                    primary="Change Password"
                  />
                </div>
              </div>
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <BookDetail
            activeCategoryId={activeCategoryId}
            handleDrawerToggle={handleDrawerToggle}
            // setBook={setBook}
            setActiveCategoryId={setActiveCategoryId}
            classes={classes}
          />
        </main>
      </div>
    </div>
  );
};

export default SideBar;
