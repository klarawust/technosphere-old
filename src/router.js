import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Meg from "./Meg";
import Venner from "./Venner";

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
    path: "/meg",
    element: <Meg />,
  },
]);
