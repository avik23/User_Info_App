import React from "react";
// import {Routes , Route,Switch} from "react-router-dom";
import { Route ,Switch} from 'react-router-dom'
 import Home from "./Home";

import { withRouter } from "react-router";


export default function IndexRoutes(){

    //Here Routes Acts as a Routes 
    console.log("window.url----------------->>",window);
    return(
           <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
     
    )

}