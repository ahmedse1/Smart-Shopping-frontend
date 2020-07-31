import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import AddCategory from "../AddCategory";
import Category from "../Category";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Table, Card, Tag, Space } from "antd";

const Categories = ({ categories, ...props }) => {
  const [open, setBoxOpen] = useState(false);

  return (
    <div>
      <div>
        {categories.map((cat, i) => {
          return <Category category={cat} index={i + 1} />;
        })}
      </div>
      <div
        className="addtransaction"
        style={{
          position: "absolute",
          // left: '54vw',
          bottom: "4vh",
          right: "8vw",
          minWidth: "15vw",
          display: "flex",
          // borderRadius: '20px',
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AddCategory
          openDialog={open}
          activeCategoryId={12}
          setOpen={setBoxOpen}
        />

        {/* </Box> */}

        <span>Add Category</span>
        <Fab
          style={{
            backgroundColor: Colors.FOCUSED,
            boxShadow: `0px 0px 8px ${Colors.FOCUSED}`,
          }}
          aria-label="add"
          onClick={() => {
            setBoxOpen(!open);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Categories;
