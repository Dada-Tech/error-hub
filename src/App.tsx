import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Login from './pages/Login/Login'
import Home from "./pages/Home/Home";
// import {GlobalStyle} from "./theme/theme";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default App;