import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/Login/Login'

const App = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);

export default App;