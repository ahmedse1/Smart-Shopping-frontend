import React, { Component, useState, useEffect } from "react";

import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    underline: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
    // marginBottom: 15,
    border: "none",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 6,
  },

  formControl: {
    height: 50,
    minWidth: 120,
  },
  paper: {
    backgroundColor: Colors.SECONDARY,
    color: Colors.TEXT_TERTIARY,
  },
});
const CategoriesDropdown = ({
  getCategories,
  categories,
  setCategory,
  ...props
}) => {
  const classes = useStyles();
  useEffect(() => {
    getCategories(localStorage.getItem("id"));
  }, [categories === null]);

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-filled-label"
          style={{ color: Colors.TEXT_TERTIARY }}
        >
          Choose Category
        </InputLabel>
        <Select
          label="To"
          labelId="demo-simple-select-filled-label"
          variant="filled"
          MenuProps={{ classes }}
          onChange={(e) => setCategory(e.target.value)}
          SelectDisplayProps={{
            classes: classes.select,
            style: {
              color: Colors.TEXT_SECONDARY,
              minWidth: "23vw",
              fontSize: 15,
            },
          }}
          classes={classes}
        >
          {categories &&
            categories.map((e, i) => (
              <MenuItem value={e._id} key={i}>
                {e.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategoriesDropdown;
