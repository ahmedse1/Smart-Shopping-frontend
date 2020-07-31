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

const Login = ({ history, login, setUserType, loading, ...props }) => {
    const [email, setEmail] = useState("");
    const classes = useStyles();
    const [password, setPassword] = useState("");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          height: "70vh",
          
          padding: 100,
          paddingRight:700,
          paddingLeft:0

        }}
      >
        <Typography style={{ marginBottom: 40 }} className="heading" variant="h4">
          <b>SMART SHOPPING BOT</b>
        </Typography>
  
        <div className="loginPage">
          <form>
            <Typography className="heading" variant="h5">
              <b>Login</b>
            </Typography>
            <div className="data-Input">
              <TextField
                type="text"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                required
                InputProps={{
                  style: {
                    color: Colors.TEXT_SECONDARY,
                    fontSize: 14
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
                }}
                style={{ width: 320 }}
                name="email"
                id="standard-required"
                label="Enter Email"
                margin="normal"
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
                    fontSize: 14
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: Colors.TEXT_PRIMARY,
                    fontSize: 12
                  }
                }}
                onChange={e => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                id="standard-required"
                label="Enter Password"
                margin="normal"
                variant="outlined"
              />
            </div>
            {/*<Button>Forgot Password? </Button> */}
            <div
              style={{
                // border: "2px solid red",
                display: "flex",
                paddingTop: 10,
                justifyContent: "space-evenly"
              }}
            >
              <Button
                classes={classes}
                onClick={() => {
                  if (email && password !== "") {
                    var data = { email, password };
                    login(data)
                      .then(res => {
                        setUserType("user");
                        localStorage.setItem("id", res.value.data._id);
                        localStorage.setItem("userType", "user");
                        history.push("/home");
                      })
                      .catch(error => {
                        alert(error.response.data.message)
                      })
                    // .catch(err => {
  
                    //   alert("Email or Password incorrect");
                    // });
                  } else {
                    alert(
                      email === ""
                        ? "Please Enter Email"
                        : "Please Enter Password"
                    );
                  }
                }}
                className=" button-Login"
              >
                <b>Login</b>
              </Button>
             
             
            </div>
            
            <p className="lead">
                <b> Don't have an account? </b><Link to="/Signup"><button><b>Sign Up</b></button></Link>
                <br/>
                <Link to="/Front"><button><b>BACK</b></button></Link>
            </p>
            <div style={{ height: 10, paddingTop: 20 }}>
              {loading && <CircularProgress size={20} />}
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
