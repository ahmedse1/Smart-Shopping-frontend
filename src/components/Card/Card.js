import React, { Component, useState, useEffect } from "react";

import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";

const Card = ({ text, value, ...props }) => {
  return (
    <div
      style={{
        height: 190,
        width: 190,
        borderRadius: 35,
        backgroundColor: Colors.SECONDARY,
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        // boxShadow: `2px 2px 2px 2px${Colors.GRAY_MEDIUM}`,
      }}
    >
      <div style={{ fontSize: 20, color: Colors.TEXT_TERTIARY }}>{text}</div>
      <div style={{ color: Colors.FOCUSED, fontSize: 30 }}>{value}</div>
    </div>
  );
};

export default Card;
