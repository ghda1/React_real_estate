import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AddProperty from "./pages/AddPropertyForm";
import UpdateProperty from "./pages/UpdatePropertyForm";
import { PropertiesProvider } from "./Contexts/PropertiesContext";
import PropertyDetails from "./pages/PropertyDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./layout/Layout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/addProperty",
              element: <AddProperty />,
            },
            {
              path: "/updateProperty",
              element: <UpdateProperty />,
            },
            {
              path: "/propertyDetails/:id",
              element: <PropertyDetails />,
            },
          ],
        },

        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/signOut",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <PropertiesProvider>
      <RouterProvider router={router} />
    </PropertiesProvider>
  );
};

export default App;
