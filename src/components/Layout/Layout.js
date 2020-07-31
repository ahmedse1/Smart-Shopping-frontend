import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Colors from "../../styles/colors";
import Button from "../Button";

const HeadBar = styled.div`
  background: ${Colors.TERTIARY};
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: -webkit-sticky;
  position: sticky;
`;

const SiteTitle = styled.span`
  color: #fff;
  font-size: 32px;

  font-weight: bold;
`;

// const Button = styled.p`
//   color: #fff;
//   font-size: 12px;
//   margin-left: 10px;
//   margin-bottom: 0;

//   @media (max-width: 776px) {
//     font-size: 16px;
//   }
// `;

const Navigation = styled.div`
  background-color: #000;
  display: flex;

  @media (max-width: 776px) {
    flex-direction: column;
  }
`;

const Layout = (props) => {
  return (
    <>
      <HeadBar>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/home"
        >
          <SiteTitle>Smart Shopping Bot</SiteTitle>
        </Link>

        <Navigation
          style={{
            backgroundColor: Colors.TERTIARY,
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              // borderRadius: 12,
              paddingLeft: 30,
              backgroundColor: Colors.TERTIARY,
            }}
            to="/login"
          >
            <Button
              onClick={() => {
                localStorage.clear();
              }}
              customStyle={{
                backgroundColor: Colors.SECONDARY,
                minWidth: 140,
                borderRadius: 12,
                color: Colors.TEXT_SECONDARY,
                textAlign: "center",
              }}
              text="Logout"
            />
          </Link>
        </Navigation>
      </HeadBar>
      {props.children}
    </>
  );
};

export { Layout };
