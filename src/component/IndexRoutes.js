import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";

export default function IndexRoutes() {

  //Here Routes Acts as a Routes 
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>

  )

}