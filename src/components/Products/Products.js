import React, { Component, useState, useEffect } from "react";
import * as Colors from "../../styles/colors";
// import Checkbox from 'react-toolbox/lib/checkbox';
import { Dialog, DialogContent, TextField } from "@material-ui/core";
import Button from "../Button";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddProduct from "../AddProduct";
import Product from "../Product";

const Products = ({ getProducts, products, ...props }) => {
  const [open, setBoxOpen] = useState(false);

  useEffect(() => {
    getProducts(localStorage.getItem("id"))
      .then((res) => {})
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div>
        {products.map((product, i) => {
          return <Product product={product} index={i + 1} />;
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
        <AddProduct
          open={open}
          activeCategoryId={12}
          handleClose={setBoxOpen}
        />

        {/* </Box> */}

        <span>Add Product</span>
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

export default Products;
