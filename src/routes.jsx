import { Route, Switch } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/",
    component: About
  },
  {
    path: "/",
    component: History
  },
  {
    path: "/",
    component: Committee
  },
  {
    path: "/",
    component: Contact
  }
];

export default routes;