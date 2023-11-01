import React, { createRef } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

const Layout = ()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      }
    ]
  }
]);

function App() {
  return (
    <div className="font-bodyFont">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
