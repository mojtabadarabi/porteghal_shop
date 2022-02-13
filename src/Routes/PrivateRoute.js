import React from "react"
import { Redirect, Route } from "react-router-dom"

function PrivateRoute (props) {
//   return loggedIn ? <Route {...props} /> : <Redirect to={props?.RedirectTo || "/intro"} />
  return true ? <Route {...props} /> : <Redirect to={props?.RedirectTo || "/intro"} />
}

export default PrivateRoute