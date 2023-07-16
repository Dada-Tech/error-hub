import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login'
// import {GlobalStyle} from "./theme/theme";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);

export default App;