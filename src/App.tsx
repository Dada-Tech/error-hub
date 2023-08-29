import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import SignIn from './pages/SignIn/SignIn';

const App = createBrowserRouter([
  {
    path: '/',
    element: <SignUp/>,
  },
]);



export default App;
