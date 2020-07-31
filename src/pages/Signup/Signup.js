import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom';
import {
  Button,
  Grid,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import * as Colors from "../../styles/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import CatDropdown from "../../components/CatDropdown";

const useStyles = makeStyles((theme) => ({
 
  root: {
    // flexGrow: 1

    width: 120,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },

  text: {
    fontSize: 13,
    color: Colors.TEXT_SECONDARY,
    backgroundColor: Colors.SECONDARY,
    
  },
}));
const Signup = ({ history, signUp, loading, ...props }) => {
  
  

  const [name, setName] = useState();
  const [isNameError, setIsNameError] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shopName, setShopName] = useState();
  const [shopCategory, setShopCategory] = useState();
  const classes = useStyles();

  const validateName = () => {
    var reg = /^[a-zA-Z ]+$/;
    if (reg.test(name)) {
      setIsNameError(false);
    } else {
      setIsNameError(true);
    }
  };
  

 
    

  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignSelf: "center",
        // height: "80vh",
        // justifyContent: "space-around"
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        
        // height: "80vh",
        
        
          paddingTop:20,
          paddingRight:700,
          paddingLeft:0
        // border: '1px solid red'
        // justifyContent: "space-evenly"
      }}
    >
      

      <div className="loginPage">
        <form>
          <Typography className="heading" variant="h5">
          <b>Sign Up </b>
          <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            
          </Typography>
          <div className="data-Input">
            <TextField
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              error={isNameError}
              onBlur={() => validateName()}
              style={{ width: 320 }}
              id="standard-required"
              label="Enter Full Name"
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className="data-Input">
            <TextField
              type="text"
              value={shopName}
              onChange={(e) => {
                setShopName(e.target.value);
              }}
              required
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              style={{ width: 320 }}
              id="standard-required"
              label="Enter Shop Name"
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className="data-Input" style={{ paddingTop: 10 }}>
            <CatDropdown setCategory={setShopCategory} />
          </div>
          <div className="data-Input">
            <TextField
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
           
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              style={{ width: 320 }}
              name="email"
              id="standard-required"
              label="Enter Email"
              variant="outlined"
              margin="dense"
            />
          </div>
     
  
          <div className="data-Input">
            <TextField
              type="password"
              value={password}
              style={{ width: 320 }}
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              }}
              margin="dense"
              type="password"
              
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              
              required
              id="standard-required"
              label="Enter Password"
              variant="outlined"
              
              
            
            />
          </div>
          <div className="data-Input">
            <TextField
            
            
              type="password"
              value={password}
              style={{ width: 320 }}
              InputProps={{
                style: {
                  color: Colors.TEXT_SECONDARY,
                  fontSize: 14,
                },
              
              }}
              
              margin="dense"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              InputLabelProps={{
                style: {
                  color: Colors.TEXT_PRIMARY,
                  fontSize: 12,
                },
              }}
              label="Confirm Password"
              variant="outlined"
          />
         
            
          </div>
          {/* <Button>Forgot Password?</Button> */}
          <Grid style={{ paddingTop: 13 }}>
            <Button
              classes={classes}
              className="button-Signup"
              onClick={() => {
                if (email && password && name !== "") {
                  if (isNameError) {
                    alert("Enter a valid name");
                  } else {
                    var data = {
                      email,
                      password,
                      name,
                      shopName,
                      shopCategory,
                    };
                    console.log(data, "ss");
                    signUp(data)
                      .then((res) => {
                        history.push("/login");
                      })
                      .catch((err) => {
                        alert(err.response.data.message);
                      });
                  }
                } else {
                  alert("Please fill all fields");
                }
              }}
            >
              Sign Up
            </Button>
          </Grid>
          <p className="my-1">
          <b>Already have an account?</b> <Link to="/Login"><button><b>Sign In</b></button></Link>
          <br/>
          <Link to="/Front"><button><b>BACK</b></button></Link>
            </p>
        </form>

        <div style={{ height: 10, paddingTop: 20 }}>
          {loading && <CircularProgress size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
