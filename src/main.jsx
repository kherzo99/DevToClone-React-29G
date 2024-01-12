import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Createuser from "./pages/Createuser";
import NewUserEmail from "./pages/NewUserEmail";
import PostView from "./pages/PostView";
import CreatePost from "./pages/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/createUser", element: <Createuser /> },
  { path: "/createUserEmail", element: <NewUserEmail /> },
  { path: "/viewPost/:id", element: <PostView /> },
  { path: "/createPost", element: <CreatePost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
