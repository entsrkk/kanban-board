import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Main from "../src/layout/Main";
import AddKanBan from "../src/pages/add/AddTask";
import SignIn from "../src/components/SignIn";
import SignUp from "../src/components/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddKanBan />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
]);

export default router;
