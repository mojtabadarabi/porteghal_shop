import PublicLayout from "../Components/Layout/Public/PublicLayout"
import { Route, Navigate } from "react-router-dom";
import { isLogin } from "../Helpers/user";

export const routesDetector=(route)=>{
    return route.private === true ? (
        privateRoute(route)
      ) : (
        publicRoute(route)
      )
}

const privateRoute = (route)=>{
    return (
        <Route
            exact={route.exact}
            private={route.private}
            path={route.path}
            shouldmax={route.shouldmax}
            element={isLogin()?route.element:<Navigate to='/'/>}
       />
    )
}

const publicRoute = (route)=>{
    return (
        <Route 
            exact={route.exact}
            private={route.private}
            path={route.path}
            shouldmax={route.shouldmax}
            element={<PublicLayout>{route.element}</PublicLayout>}
      />
    )
}