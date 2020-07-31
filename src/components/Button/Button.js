import React, { Component, useState, useEffect } from "react";

const Button = ({
  width,
  backgroundColor,
  fontSize,
  height,
  text,
  customStyle,
  borderRadius,
  onClick,
  ...props
}) => {
  return (
    <div
      className="btn"
      onClick={onClick}
      style={{
        ...customStyle,
        ...{
          cursor: "pointer",
          padding: "8px 10px 8px 10px"
        }
      }}
    >
      {text ? text : "text not given"}
    </div>
  );
};

export default Button;
