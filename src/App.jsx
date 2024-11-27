import React, { lazy,Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// chunking
// code spliting 
// Dynamic bundling
// lazy loading
// on demand loading

const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element:<Suspense fallback={<h1>About Loading...</h1>}><About /> </Suspense> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={appRoute} />;
};

export default App;
