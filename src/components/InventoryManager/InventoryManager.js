import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardButton from "../CardButton";

const InventoryManager = ({ setActivePageName, ...props }) => {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-evenly",
          height: 400,
          fontSize: 40,
          width: "80vw",
          color: Colors.FOCUSED,
        }}
      >
        <div
          onClick={() => {
            setActivePageName("Products");
          }}
        >
          <CardButton text={"Products"} value={"0"} />
        </div>
        <div
          onClick={() => {
            setActivePageName("Categories");
          }}
        >
          <CardButton text={"Categories"} value={"0"} />
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;
