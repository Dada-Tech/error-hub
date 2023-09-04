import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Errorpage from "./pages/Errorpage/Errorpage";

const App = createBrowserRouter([
  {
    path: '/',
    element: <Errorpage />,
  },
]);

export default App;
