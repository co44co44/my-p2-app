import React from 'react'
import {Route, Switch } from "react-router-dom"
import Home from "./Home"
import InsiteProgram from "./InsiteProgram.js"
import OnlineProgram from './OnlineProgram.js'
import NavBar from "./NavBar"
import ShareProject from "./ShareProject"

function App() {

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path= "/onlineprogram">
          <OnlineProgram />
        </Route>
        <Route exact path= "/insiteprogram">
          <InsiteProgram />
        </Route>
        <Route exact path= "/shareproject">
          <ShareProject />
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;