import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../Card";

const Dashboard = ({ info, ...props }) => {
  return (
    <div style={{}}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 50,
          marginBottom: 50,
          fontSize: 40,
          width: "80vw",
          color: Colors.FOCUSED,
        }}
      >
        <Card text={"Payments"} value={"$0"} />
        <Card text={"Orders"} value={"2"} />
      </div>

      <div style={{ color: Colors.FOCUSED, fontSize: 32, marginBottom: 40 }}>
        Shop info
      </div>
      <div>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            textAlign: "left",
            width: 100,
            color: Colors.FOCUSED,
          }}
        >
          Shop Name:
        </span>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            textAlign: "left",
            width: 100,
          }}
        >
          {info && info.shopName}
        </span>
      </div>
      <div>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            marginBottom: 30,
            textAlign: "left",
            width: 100,
            color: Colors.FOCUSED,
          }}
        >
          Owner Name:
        </span>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            textAlign: "left",
            width: 100,
          }}
        >
          {info && info.name}
        </span>
      </div>
      <div>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            marginBottom: 30,
            textAlign: "left",
            width: 100,
            color: Colors.FOCUSED,
          }}
        >
          Shop Category:
        </span>
        <span
          style={{
            fontSize: 20,
            marginRight: 10,
            textAlign: "left",
            width: 100,
          }}
        >
          {info && info.shopCategory}
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
