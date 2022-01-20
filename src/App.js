import React, { Suspense } from 'react';
import './App.css';
import { useLanguage } from './Providers/LangProvider/LangProvider';
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./Routes/Routes";
import PrivateRoute from "./Routes/PrivateRoute";
import MaxWidth from "./Routes/MaxWidth";

function Wrapper({ ...route }) {
  // temp our wrapper and equal and wrap
  let temp
  temp = route.private === true ? (
    <PrivateRoute {...route} key={route.id}/>
  ) : (
    <Route {...route} key={route.id}/>
  )

  return temp
  
}


function App() {
  const {dir} = useLanguage()
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="App" dir={dir}>
          <Routes>
            {routes.map((route)=> Wrapper(route))}
          </Routes>
      </div>

    </Suspense>
  );
}

export default App;
