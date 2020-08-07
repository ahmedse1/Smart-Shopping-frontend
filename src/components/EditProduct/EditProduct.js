import React, { Component, useState, useEffect, memo } from "react";

import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import CategoriesDropdown from "../CategoriesDropdown";

import Button from "../Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    color: Colors.FOCUSED,
  },
  radio: {
    "&$checked": {
      color: "#4B8DF8",
    },
  },
});
const EditProduct = ({
  open,
  handleClose,
  questionData,
  setQuestion,
  setOptionA,
  setOptionB,
  setOptionC,
  setOptionD,
  setAnswerIndex,
  activeCategoryId,
  postQuestion,
  getQuestions,
  uploadImage,
  loading,
  getProducts,
  postProduct,
  editProduct,
  productId,
  ...props
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [productImage, setProductImage] = useState("");
  const [price, setPrice] = useState("");
  //const [isPriceError, setPriceError] = useState(false);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  let fileInput = React.createRef();

  const handleCloseDialogs = () => {
    const data = {
      name:name,
      detail,
      image: productImage,
      price,
      size,
      color,
      quantity,
      category,
      userId: localStorage.getItem("id"),
    };
    console.log(data, "data");
    if (
      name !== "" &&
      detail !== "" &&
      productImage !== "" &&
      price !== "" &&
      size !== "" &&
      category !== ""
    ) {
    
      if(validateName(name)) return alert("Name can only be Alphabetical");
      if (parseFloat(data.price) < 0) {
       return alert("Price can't be in negative.");
      } else {
        if (parseInt(data.quantity) < 0) {
         return  alert("Quantity Can't be in  negative.");
        }
        if (validateName(color)) {
          return alert("Invalid Color");
        }
        postProduct(data)
          .then((res) => {
            getProducts(localStorage.getItem("id"))
              .then((res) => {
                handleClose(!open);
              })
              
            .catch((err) => {
                alert(err.message);
              });
          })
          .catch((err) => {});
      }
    } else {
      alert("Please Fill all fields");
    }
  };
  const validateName = (sn) => {
    var reg = /^[a-z]+$/i;
    if (reg.test(sn)) {
      return false;
    } else {
      return true;
    }
  };
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    uploadImage(file).then((res) => {
      setProductImage(res.value[0].mediaSource);
    });
    reader.onloadend = () => {
      setFile(file);
      console.log(file, "file");
      // setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
/*
  const validtePrice = () => {
    var reg = /^\d+$/;
    if (reg.test(price)) {
      setPriceError(false);
    } else {
      setPriceError(true);
    }
  };*/
  return (
    <Dialog
      // fullScreen={fullScreen}
      open={open}
      // open={true}
      PaperProps={{
        style: {
          borderRadius: 22,
          height: 990,
          backgroundColor: Colors.TERTIARY,
        },
      }}
      // fullWidth

      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent
        style={{
          backgroundColor: Colors.TERTIARY,
          display: "flex",
          padding: 38,
        }}
      >
        <div>
          <div
            style={{
              height: 40,
              fontSize: 25,
              color: Colors.TEXT_SECONDARY,
              justifyContent: "center",
              textAlign: "center",
              // marginBottom: 15,
            }}
          >
            Edit Product
          </div>
          <div style={{ height: 300, width: 500 }}>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
              />
            </div>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                label="Detail"
              />
            </div>
            <div
              style={{
                // width: 400,
                marginBottom: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: Colors.TEXT_SECONDARY, fontSize: 24 }}>
                Upload Image
              </span>
              <input
                type="file"
                onChange={handleImageChange}
                ref={fileInput}
                id="file"
                aria-label="File browser example"
              />
            </div>
            <div style={{ marginBottom: 15 }}>
              <CategoriesDropdown setCategory={setCategory} />
            </div>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="number"
                variant="outlined"
               
              /*  onBlur={() => {
                  validatePrice();
                }}*/
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                label="Price"
              />
            </div>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={size}
                onChange={(e) => setSize(e.target.value)}
                label="Size (Optional)"
              />
            </div>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="text"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={color}
                onChange={(e) => setColor(e.target.value)}
                label="Color (Optional)"
              />
            </div>
            <div>
              <TextField
                // margin='dense'
                name="amount"
                type="number"
                variant="outlined"
                style={{
                  // height: 67,
                  backgroundColor: Colors.SECONDARY,
                  color: "red",
                  borderRadius: 6,
                  border: "0px",
                  marginBottom: 15,
                }}
                InputProps={{
                  style: {
                    color: Colors.FOCUSED,
                    height: 47,
                    // width: 300

                    // fontSize: 28
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12,
                  },
                }}
                fullWidth
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                label="Quantity"
              />
            </div>
          </div>
          <div
            style={{
              // border: '1px solid red',
              position: "relative",
              top: "180px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              onClick={() => handleClose()}
              customStyle={{
                backgroundColor: Colors.PRIMARY,
                minWidth: 150,
                borderRadius: 12,
                color: Colors.TEXT_TERTIARY,

                textAlign: "center",
              }}
              text="Cancel"
            />

            <Button
              onClick={handleCloseDialogs}
              customStyle={{
                backgroundColor: Colors.FOCUSED,
                minWidth: 150,

                borderRadius: 12,
                color: Colors.TEXT_PRIMARY,
                textAlign: "center",
              }}
              text="Update"
            />
          </div>
          <div
            style={{
              height: 10,
              paddingTop: 20,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {loading && <CircularProgress size={20} color="secondary" />}
          </div>
        </div>
      </DialogContent>

      <DialogActions
        style={{ backgroundColor: Colors.TERTIARY }}
      ></DialogActions>
    </Dialog>
  );
};

export default EditProduct;
