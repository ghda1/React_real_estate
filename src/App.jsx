import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import AddProperty from "./pages/AddPropertyForm";
import UpdateProperty from "./pages/UpdatePropertyForm";
import { PropertiesProvider } from "./Contexts/PropertiesContext";
import PropertyDetails from "./pages/PropertyDetails";
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
  ]);
  return (
    <PropertiesProvider>
      <RouterProvider router={router} />
    </PropertiesProvider>
  );
};

export default App;
