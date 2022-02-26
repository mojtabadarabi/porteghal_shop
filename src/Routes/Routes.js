import { lazy } from "react";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import CreateProduct from "../Components/Admin/Product/CreateProduct";
const MainPage = lazy(() => import("../Components/MainPage/MainPage"))
const SignUp = lazy(() => import("../Components/Sign/SignUp/SignUp"))
const SignIn = lazy(() => import("../Components/Sign/Login/SignIn"))

const routes = [
    {
      id:0,
        exact: true,
        private: false,
        path: "/",
        element: <MainPage/>,
        shouldmax: true,
      },
    {
      id:0,
        exact: true,
        private: false,
        path: "/signup",
        element: <SignUp/>,
        shouldmax: true,
      },
    {
      id:0,
        exact: true,
        private: false,
        path: "/signin",
        element: <SignIn/>,
        shouldmax: true,
      },
    {
      id:0,
        exact: true,
        private: false,
        path: "/product/:id",
        element: <SingleProduct/>,
        shouldmax: true,
      },
    {
      id:0,
        exact: true,
        private: false,
        path: "/admin/createproduct",
        element: <CreateProduct/>,
        shouldmax: true,
      },
      
];
export const routesName = routes.map((item) => item?.path);
export default routes;
