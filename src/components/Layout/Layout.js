import React from "react";
import Aux from "../../hoc/Auxillary";
import Classes from "./Layout.module.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar , sideDrawer, backdrop</div>
    <main className={Classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
