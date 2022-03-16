import React from "react"
import { Navigate, Route } from "react-router-dom"

function PrivateRoute (props) {
//   return loggedIn ? <Route {...props} /> : <Redirect to={props?.RedirectTo || "/intro"} />
  return <Route {...props} />
}

export default PrivateRoute