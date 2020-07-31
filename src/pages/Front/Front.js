import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import * as Colors from "../../styles/colors";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
    width: 100
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    fontSize: 11,
    color: Colors.TEXT_SECONDARY,
    backgroundColor: Colors.SECONDARY
  }
}));





const Login = ({ history, setUserType, loading, ...props }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        height: "100vh",
        padding:50,
        paddingLeft:0,
        paddingRight:100,
        fontSize: 20,
        TextColor: "Black"
      }}
    >
       
      <Typography style={{ marginBottom: 30 }} className="heading" variant="h2">
      <b>SMART SHOPPING BOT</b>
      </Typography>
      <p className="lead">
      
      <b> Modern Basics. Radical Transparency. </b>
                      
       </p>
      
        <form>
          
          
          
          <div
            style={{
              // border: "2px solid red",
              display: "flex",
              paddingTop: 100,
              justifyContent: "space-evenly",
              paddingLeft:0,
              
            }}
          >
             <div style={{ height: 50, paddingTop: 50, }}>
               
              {loading && <CircularProgress size={20} />}
            </div>

            <Button
              classes={classes}
              onClick={() => {
                history.push("/login");
              }}
              className=" button-Signup"
            >
              <b> Login</b> 
            </Button>

            <Button
              classes={classes}
              onClick={() => {
                history.push("/signup");
              }}
              className=" button-Signup"
            >
              <b> Sign Up</b> 
            </Button>

            <Button
              classes={classes}
              onClick={() => {
                history.push("/adminlogin");
              }}
              className=" button-Login"
            >
             <b>Admin Panel</b> 
            </Button>
            
            <Button
          
              classes={classes}
              
              onClick={() => {
                history.push("/InventoryLogin");
              }}
              className=" button-Login"
            >
              
              <b> Inventory Panel</b> 
            </Button>
            
            
            <Button
              classes={classes}
              onClick={() => {
                history.push("/DeliveryLogin");
              }}
              className=" button-Login"
            >
              <b> Delivery Panel</b> 
            </Button>

          

            <Button
              classes={classes}
              onClick={() => {
                history.push("/AccountLogin");
              }}
              className=" button-Login"
            >
              <b> Account Panel</b> 
            </Button>
          
          </div>
          
        
         
            

          <div className="landing-footer">
          <div style={{ height: 285, paddingTop: 10 }}>
            {loading && <CircularProgress size={20} />}
          </div>
          <b> © SSB. All rights reserved </b>
          </div>         
           
        </form>
              
    </div>
  );
};

export default Login;
