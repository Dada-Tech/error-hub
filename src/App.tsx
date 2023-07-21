import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default App;