import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import AddProperty from "./pages/AddProperty";
import UpdateProperty from "./pages/UpdateProperty";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/addProperty",
          element: <AddProperty />,
        },
        // {
        //   path: "/updateProperty",
        //   element: <UpdateProperty />,
        // },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
