import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from "./pages/SignIn/SignIn";

const App = createBrowserRouter([
  {
    path: '/',
    element: <SignIn/>,
  },
]);

export default App;
