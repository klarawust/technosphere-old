import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Venner from "./sider/Venner";
import CV from "./sider/CV";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/venner",
    element: <Venner />,
  },
  {
    path: "/CV",
    element: <CV />,
  },
]);
