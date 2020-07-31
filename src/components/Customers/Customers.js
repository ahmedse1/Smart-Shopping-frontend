import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Customers = ({ ...props }) => {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: 500,
          fontSize: 40,
          color: Colors.FOCUSED,
        }}
      >
        Coming Soon
      </div>
    </div>
  );
};

export default Customers;
