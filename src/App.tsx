import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import {GlobalStyle} from "./theme/theme";


const App: React.FC = () => {
  return (
      <GlobalStyle>
        <Routes>
          {/*<Route path="/" element={Login}/>*/}
            <Route path="/" Component={Login} />
          {/*<Route path='/signup' element={Signup}></Route>*/}
        </Routes>
      </GlobalStyle>

  );
}

export default App;