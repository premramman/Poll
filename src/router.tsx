import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const routes = [{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    Component: lazy(() => import('./pages/Home')) 
  }, {
    path: "login",
    Component: lazy(() => import('./pages/Login')) 
  }]
}];

const router = createBrowserRouter(routes);

export default router;