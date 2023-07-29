import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
//import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

const App = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
]);

export default App;
