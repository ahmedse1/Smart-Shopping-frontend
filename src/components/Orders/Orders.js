import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "../Card";
import { Table, Tag, Space } from "antd";
const Orders = ({ ...props }) => {
  const dataSource = [
    {
      key: "1",
      productname: "Bedsheet",
      quantity: 2,
      customername: "Shahid Amir",
      status: "Delivered",
    },
    {
      key: "2",
      productname: "Shoes",
      quantity: 4,
      customername: "Sameer Khan",
      status: "Pending",
    },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productname",
      key: "productname",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Customer Name",
      dataIndex: "customername",
      key: "customername",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          paddingTop: 30,
          // display: "flex",
          justifyContent: "center",

          // // fontSize: 40,
          // width: "80vw",
          // border: "1px solid red",
          // color: Colors.FOCUSED,
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          align="center"
          size={"small"}
          // bordered={true}
        />
      </div>
    </div>
  );
};

export default Orders;
