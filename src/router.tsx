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
    path: "signin",
    Component: lazy(() => import('./pages/SignIn'))
  }]
}];

const router = createBrowserRouter(routes);

export default router;