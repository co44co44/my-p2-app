import React from 'react'
import {Route, Switch } from "react-router-dom"
import Home from "./Home"
import InsiteProgram from "./InsiteProgram.js"
import OnlineProgram from './OnlineProgram.js'
import NavBar from "./NavBar"
import ShareProject from "./ShareProject"

function App() {
  console.log (OnlineProgram)
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path= "/onlineprogram">
          <OnlineProgram />
        </Route>
      </Switch>
    </div>
  )
}

export default App;