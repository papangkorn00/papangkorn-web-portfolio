import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// import App from "./App.jsx"
import "./index.css"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Portfolio from "./components/Portfolio.jsx"

const router = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/about", element:<About/>},
  {path:"/portfolio", element:<Portfolio/>},
  
  // {path:"/navbar", element:<Navbar/>}

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
