
import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import InsiteProgram from "./InsiteProgram.js"
import OnlineProgram from './OnlineProgram.js'
import NavBar from "./NavBar"
import ShareCourses from "./ShareCourses"


function App () {
  

  return (
    <div>
      {/* <NavBar onChangePage={setPage} /> */}
      
      <Switch>
        <Route exact path= "/onlineprogram">
          <OnlineProgram />
        </Route>
        <Route exact path= "/insiteprogram">
          <InsiteProgram />
        </Route>
        <Route exact path= "/sharecouses">
          <ShareCourses/>
        </Route>
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
      <NavBar/>
    </div>
  )
}

export default App;