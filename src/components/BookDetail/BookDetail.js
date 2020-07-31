import React, { Component, useState, useEffect, memo } from "react";
import * as Colors from "../../styles/colors";
import QuestionsBox from "../QuestionsBox";
import { Fab } from "@material-ui/core";
import NavBar from "../NavBar";
import AddIcon from "@material-ui/icons/Add";

const BookDetail = ({
  setActiveCategoryId,
  activeCategoryId,
  handleDrawerToggle,
  classes,
  // setBook,
  ...props
}) => {
  const [open, setBoxOpen] = useState(false);
  const [selectedBox, setSelectedBox] = React.useState("questions");

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div>
          {/* <NavBar
            handleDrawerToggle={handleDrawerToggle}
            selectedBox={selectedBox}
            classes={classes}
            setSelectedBox={setSelectedBox}
          /> */}
        </div>
        <h1>{selectedBox === "questions" ? "Managers" : "Managers"}</h1>

        <div
          style={{
            height: "85vh",
            paddingBottom: "80px",
            overflow: "scroll",
          }}
        >
          {selectedBox === "questions" && (
            <QuestionsBox activeCategoryId={activeCategoryId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
