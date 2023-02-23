import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Books from "./Books";
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
    path: "/books",
    element: <Books />,
  },
]);
