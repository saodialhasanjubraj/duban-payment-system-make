import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root/Root.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{ path: "/", Component: Home, index: true }],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
