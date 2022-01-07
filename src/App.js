import React from "react";


import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IndexRoutes from "./component/IndexRoutes";




ReactDom.render(
  <BrowserRouter>
    <IndexRoutes />
  </BrowserRouter>, document.getElementById("root"));