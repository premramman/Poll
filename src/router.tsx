import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const routes = [{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Home />
  }, {
    path: "login",
    element: <Login />
  }]
}];

const router = createBrowserRouter(routes);

export default router;