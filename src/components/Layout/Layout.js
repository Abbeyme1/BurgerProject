import React from "react";
import Aux from "../../hoc/Auxillary";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;

//this contains everthing after app.js

//app.js --> layout.js
