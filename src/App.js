import React from "react";
import logo from "./logo.svg";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";


import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import * as Colors from "./styles/colors";
import store from "./store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

function App() {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <AppRouter />
      </div>
      {/* </ThemeProvider> */}
    </Provider>
  );
}

export default App;
